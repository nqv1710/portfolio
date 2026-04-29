import { NextResponse } from 'next/server';

export interface Planet {
  slug: string;
  name: string;
  type: string;
  description: string;
  distanceFromSun: string;
}

const mockPlanets: Planet[] = [
  { slug: 'mercury', name: 'Mercury', type: 'Terrestrial', description: 'The smallest planet in our solar system and closest to the Sun.', distanceFromSun: '57.91 million km' },
  { slug: 'venus', name: 'Venus', type: 'Terrestrial', description: 'Spinning in the opposite direction to most planets, Venus is the hottest planet.', distanceFromSun: '108.2 million km' },
  { slug: 'earth', name: 'Earth', type: 'Terrestrial', description: 'Our home planet is the only place we know of so far thats inhabited by living things.', distanceFromSun: '149.6 million km' },
  { slug: 'mars', name: 'Mars', type: 'Terrestrial', description: 'A dusty, cold, desert world with a very thin atmosphere.', distanceFromSun: '227.9 million km' },
  { slug: 'jupiter', name: 'Gas Giant', type: 'Gas Giant', description: 'More than twice as massive than the other planets of our solar system combined.', distanceFromSun: '778.5 million km' },
  { slug: 'saturn', name: 'Saturn', type: 'Gas Giant', description: 'Adorned with a dazzling, complex system of icy rings.', distanceFromSun: '1.434 billion km' },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return NextResponse.json(mockPlanets);
}
