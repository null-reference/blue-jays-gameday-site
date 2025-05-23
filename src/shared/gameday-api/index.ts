import { Logger } from '../logger';
import { GamedayReport } from './types';

const logger = new Logger({
  prefix: 'gameday-api',
});

export const getLatestGamedayReport = async (): Promise<GamedayReport> => {
  logger.debug('getting latest gameday report');

  const res = await fetch(`${process.env.BLUEJAYS_GAMEDAY_API_URL}/api/v1/gameday-report/latest`, {
    headers: {
      // cache: 'no-store',
      'Content-Type': 'application/json',
      'api-key': process.env.BLUEJAYS_GAMEDAY_API_KEY || '',
    },
    // cache for 15 seconds; doing this because react strict mode in dev causes
    // the component to mount twice, which causes the api to be called twice;
    // so just be nice to the api and cache the response for a very short time
    next: { revalidate: 15 },
  });

  if (!res.ok) {
    throw new Error('failed to get gameday report');
  }

  const data = await res.json();
  const report = data.data as GamedayReport;

  logger.debug('got gameday report', data);

  return report;
};
