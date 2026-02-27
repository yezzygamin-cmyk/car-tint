"""Rotating logging setup. Rotates daily (new file per day)."""

import logging
from logging.handlers import TimedRotatingFileHandler
from pathlib import Path


def _make_file_handler(log_file: Path, name: str) -> TimedRotatingFileHandler:
    """Create a rotating file handler."""
    handler = TimedRotatingFileHandler(
        log_file,
        when="midnight",
        interval=1,
        backupCount=7,
        encoding="utf-8",
    )
    handler.suffix = "%Y-%m-%d"
    handler.setFormatter(
        logging.Formatter(
            "%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S",
        )
    )
    handler.name = name
    return handler


def setup_logging(log_dir: str | Path = "logs") -> None:
    """Configure rotating file logging. New file per day."""
    log_path = Path(log_dir)
    log_path.mkdir(parents=True, exist_ok=True)
    app_log_file = log_path / "app.log"
    server_log_file = log_path / "uvicorn.log"

    root = logging.getLogger()
    root.setLevel(logging.INFO)

    # App log handler
    if not any(
        getattr(h, "name", None) == "app" and isinstance(h, TimedRotatingFileHandler)
        for h in root.handlers
    ):
        app_handler = _make_file_handler(app_log_file, "app")
        root.addHandler(app_handler)

    # Uvicorn/Gunicorn server log handler (separate file)
    server_handler = _make_file_handler(server_log_file, "uvicorn")
    for logger_name in ("uvicorn", "uvicorn.error", "uvicorn.access", "gunicorn", "gunicorn.error"):
        server_logger = logging.getLogger(logger_name)
        server_logger.setLevel(logging.INFO)
        if not any(
            getattr(h, "name", None) == "uvicorn" for h in server_logger.handlers
        ):
            server_logger.addHandler(server_handler)
