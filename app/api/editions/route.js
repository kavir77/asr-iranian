import { NextResponse } from 'next/server';
import editions from '@/data/editions.json';

export function GET() {
  return NextResponse.json(editions);
}
