"""Database connection and session management."""

from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.pool import NullPool

from app.core.config import is_module_enabled, settings
from app.models.base import Base

# Import models so tables are created (only when module is enabled)
if is_module_enabled("auth"):
    from app.modules.auth.models import User  # noqa: F401

# SQLite needs NullPool (no connection pooling); PostgreSQL uses default pooling
_engine_kwargs: dict = {}
if "sqlite" in settings.database_url:
    _engine_kwargs["poolclass"] = NullPool

engine = create_async_engine(
    settings.database_url,
    echo=settings.debug,
    **_engine_kwargs,
)

async_session_maker = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency that provides a database session."""
    async with async_session_maker() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()


async def init_db() -> None:
    """Create database tables. Call on startup."""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
