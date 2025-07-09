import { NextResponse } from 'next/server';
import editions from '@/data/editions.json';

export function GET(_, { params }) {
  const edition = editions.find(e => e.id === params.id);
  if (!edition) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(edition);
}
