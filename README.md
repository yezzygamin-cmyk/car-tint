# Website Template

Extendable full-stack template: Python/FastAPI + React, PostgreSQL, Docker Compose.

## Quick start (Docker)

```bash
docker compose up --build
```

- Frontend: http://localhost
- Backend API: http://localhost:8000
- API docs: http://localhost:8000/docs

## Local development

Local runs use **SQLite** by default (no PostgreSQL or Docker needed).

### Backend

```bash
cd python
pip install -r requirements.txt
# Optional: set ENABLED_MODULES=auth for auth module
uvicorn app.main:app --reload
```

SQLite database: `python/template.db` (created automatically).

### Frontend

```bash
cd react
npm install
npm run dev
```

Frontend proxies `/api` to the backend (see `vite.config.ts`).

## Optional modules

Enable via `ENABLED_MODULES` (comma-separated):

- `auth` – Login, registration, JWT

Example: `ENABLED_MODULES=auth,basket`

## Database

- **Local**: SQLite (`template.db` in `python/`). No setup required.
- **Docker/Production**: PostgreSQL. Set `DATABASE_URL` in environment.

## Project structure

- `python/` – FastAPI backend
- `react/` – React frontend (Vite)
- `docker-compose.yml` – Backend + frontend + PostgreSQL
- `.cursor/rules/` – AI assistant rules (shared, backend, frontend)
