import { NextResponse } from 'next/server';
import { getLatestGamedayReport } from '@/shared/gameday-api';

export async function GET() {
  try {
    const report = await getLatestGamedayReport();
    return NextResponse.json(report);
  } catch (error) {
    console.error('Error fetching gameday report:', error);
    return NextResponse.json({ error: 'Failed to fetch gameday report' }, { status: 500 });
  }
}
