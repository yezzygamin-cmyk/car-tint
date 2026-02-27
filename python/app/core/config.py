"""Application configuration."""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    # App
    app_name: str = "Website Template"
    debug: bool = False
    log_dir: str = "logs"

    # Database
    # Local: SQLite (default). Production/Docker: set DATABASE_URL to PostgreSQL
    database_url: str = "sqlite+aiosqlite:///./template.db"

    # API
    api_v1_prefix: str = "/api/v1"

    # Optional modules (comma-separated: auth,basket,messaging)
    enabled_modules: str = ""

    # Auth (when auth module enabled)
    secret_key: str = "change-me-in-production"


settings = Settings()


def is_module_enabled(module: str) -> bool:
    """Check if a module is enabled via ENABLED_MODULES env."""
    return module in [m.strip() for m in settings.enabled_modules.split(",") if m.strip()]
