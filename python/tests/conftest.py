"""Pytest configuration and fixtures."""

from collections.abc import AsyncGenerator
from unittest.mock import AsyncMock

import pytest
from httpx import ASGITransport, AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.main import app


async def mock_get_db() -> AsyncGenerator[AsyncSession, None]:
    """Mock DB session for tests that don't need a real database."""
    session = AsyncMock(spec=AsyncSession)
    session.execute = AsyncMock(return_value=None)
    yield session


@pytest.fixture(autouse=True)
def override_db():
    """Override get_db so tests run without a real database."""
    app.dependency_overrides[get_db] = mock_get_db
    yield
    app.dependency_overrides.clear()


@pytest.fixture
def anyio_backend():
    return "asyncio"


@pytest.fixture
async def client():
    """Async HTTP client for API tests."""
    async with AsyncClient(
        transport=ASGITransport(app=app),
        base_url="http://test",
    ) as ac:
        yield ac
