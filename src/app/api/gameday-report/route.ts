import { NextResponse } from 'next/server';
import { getLatestGamedayReport } from '@/shared/gameday-api';
import { Logger } from '@/shared/logger';

const logger = new Logger({
  prefix: 'gameday-report-api-route',
});

export async function GET() {
  try {
    const report = await getLatestGamedayReport();
    return NextResponse.json(report);
  } catch (error) {
    logger.error('Error fetching gameday report:', error);
    return NextResponse.json({ error: 'Failed to fetch gameday report' }, { status: 500 });
  }
}
