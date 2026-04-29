import Link from 'next/link';
import { Planet } from '../../api/planets/route';
import { notFound } from 'next/navigation';

async function getPlanet(slug: string): Promise<Planet | undefined> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/planets`, { cache: 'no-store' });
  
  if (!res.ok) throw new Error('Failed to fetch data');
  
  const planets: Planet[] = await res.json();
  return planets.find(p => p.slug === slug);
}

// NextJS dynamic route parameters
export default async function PlanetPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const planet = await getPlanet(resolvedParams.slug);

  if (!planet) {
    notFound(); // Triggers the Next.js not-found.tsx boundary
  }

  return (
    <div className="container-custom animate-fade-in" style={{ maxWidth: '800px' }}>
      <Link href="/planets" className="btn" style={{ marginBottom: '2rem', display: 'inline-block', background: 'rgba(255,255,255,0.1)' }}>
        ← Back to Registry
      </Link>
      
      <div className="glass-card" style={{ padding: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <div className="planet-card-type">{planet.type}</div>
            <h1>{planet.name}</h1>
          </div>
        </div>
        
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.2rem', color: '#fff' }}>{planet.description}</p>
        </div>

        <div className="grid-custom grid-cols-2-custom" style={{ gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>Distance from Sun</p>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', color: '#fff' }}>{planet.distanceFromSun}</p>
          </div>
          {/* We can add more specific details here later */}
        </div>
      </div>
    </div>
  );
}
