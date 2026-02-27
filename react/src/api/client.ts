/**
 * API client for backend communication.
 * Base URL uses relative path in dev (Vite proxy) and env in production.
 */

const API_BASE = import.meta.env.VITE_API_URL ?? '/api/v1';

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = path.startsWith('http') ? path : `${API_BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  let data: unknown;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  if (!res.ok) {
    const detail =
      data && typeof data === 'object' && 'detail' in data && typeof (data as { detail: unknown }).detail === 'string'
        ? (data as { detail: string }).detail
        : res.statusText;
    const msg = `API error: ${res.status} - ${detail}`;
    const err = new Error(msg) as Error & { status?: number; detail?: string };
    err.status = res.status;
    err.detail = detail;
    throw err;
  }
  return data as T;
}

export interface HealthResponse {
  status: string;
  database?: string;
}

export async function getHealth(): Promise<HealthResponse> {
  return apiFetch<HealthResponse>('/health');
}

export async function getHealthDb(): Promise<HealthResponse> {
  return apiFetch<HealthResponse>('/health/db');
}
