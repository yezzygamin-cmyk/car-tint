import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHealth, getHealthDb } from '../api/client';

export default function Home() {
  const [health, setHealth] = useState<string | null>(null);
  const [dbHealth, setDbHealth] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHealth()
      .then((r) => setHealth(r.status))
      .catch((e) => setError(e instanceof Error ? e.message : 'Unknown error'));

    getHealthDb()
      .then((r) => setDbHealth(r.database ?? r.status))
      .catch(() => setDbHealth('unavailable'));
  }, []);

  return (
    <main>
      <h1>Website Template</h1>
      <p>Extendable full-stack template for any project.</p>
      <Link to="/template" className="btn-link">
        View Template
      </Link>
      <section>
        <h2>API Status</h2>
        <p>Health: {health ?? 'loading...'}</p>
        <p>Database: {dbHealth ?? 'loading...'}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </section>
    </main>
  );
}
