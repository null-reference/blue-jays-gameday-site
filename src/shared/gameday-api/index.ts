import { Logger } from '../logger';
import { GamedayReport } from './types';

const logger = new Logger({
  prefix: 'gameday-api',
});

export const getLatestGamedayReport = async (): Promise<GamedayReport | null> => {
  logger.debug('getting latest gameday report');

  const res = await fetch(`${process.env.BLUEJAYS_GAMEDAY_API_URL}/api/v1/gameday-report/latest`, {
    headers: {
      cache: 'no-store',
      'Content-Type': 'application/json',
      'api-key': process.env.BLUEJAYS_GAMEDAY_API_KEY || '',
    },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error('failed to get gameday report');
  }

  const data = await res.json();
  const report = data.data as GamedayReport;

  logger.debug('got gameday report', data);

  return report;
};
