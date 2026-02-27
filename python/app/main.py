"""FastAPI application entry point."""

import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.core.config import is_module_enabled, settings
from app.core.database import init_db
from app.core.logging import setup_logging

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan: startup and shutdown."""
    setup_logging(settings.log_dir)
    logger.info("Application starting")
    try:
        await init_db()
    except Exception as e:
        logger.warning(
            "Database initialization skipped (PostgreSQL may not be running): %s",
            e,
            exc_info=True,
        )
    yield
    # Shutdown logic if needed


app = FastAPI(
    title=settings.app_name,
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix=settings.api_v1_prefix)

if is_module_enabled("auth"):
    from app.modules.auth.router import router as auth_router

    app.include_router(auth_router, prefix=settings.api_v1_prefix)
