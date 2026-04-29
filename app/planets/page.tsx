import Link from 'next/link';
import { Planet } from '../api/planets/route';

async function getPlanets(): Promise<Planet[]> {
  // We specify a fully qualified URL for fetch during server-side rendering,
  // or we can just fetch from an external API. Since this is an internal API route,
  // we use an absolute URL. We'll fallback to localhost:3000 if not set.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  // In Next.js 13+, fetch is polyfilled to add caching options
  const res = await fetch(`${baseUrl}/api/planets`, { cache: 'no-store' }); // Disable cache for demo
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function PlanetsPage() {
  const planets = await getPlanets();

  return (
    <div className="container-custom animate-fade-in">
      <h2>Planetary Directory</h2>
      <p style={{ marginBottom: '2rem' }}>Fetched using server-side rendering with streaming.</p>

      <div className="grid-custom grid-cols-3-custom">
        {planets.map((planet) => (
          <Link href={`/planets/${planet.slug}`} key={planet.slug} style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="planet-card-type">{planet.type}</div>
              <h3 className="planet-card-title">{planet.name}</h3>
              <p style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.9rem' }}>
                View details →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
