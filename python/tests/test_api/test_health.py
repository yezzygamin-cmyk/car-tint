"""Health endpoint tests."""

import pytest


@pytest.mark.asyncio
async def test_health(client):
    """Health endpoint returns ok."""
    r = await client.get("/api/v1/health")
    assert r.status_code == 200
    data = r.json()
    assert data["status"] == "ok"


@pytest.mark.asyncio
async def test_health_db(client):
    """Health DB endpoint returns database status."""
    r = await client.get("/api/v1/health/db")
    assert r.status_code == 200
    data = r.json()
    assert "status" in data
    assert "database" in data
