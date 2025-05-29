'use client';

import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { GamedayReport as ApiGamedayReport } from '@/shared/gameday-api/types';
import { Logger } from '@/shared/logger';
import { withMinimumTime } from '@/shared/utils';
import GamedayReport from './GamedayReport';
import SpinningBaseball from './shared/SpinningBaseball';

const logger = new Logger({
  prefix: 'client-gameday-report',
  enabledInProd: true,
});

export default function ClientGamedayReport() {
  const [isReportLoading, startFetchReport] = React.useTransition();
  const [report, setReport] = React.useState<ApiGamedayReport | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    startFetchReport(async () => {
      try {
        // NOTE: forcing the api to wait N second(s) before returning response;
        //       allows for the cool loading spinner to show up
        // const response = await fetch('/api/gameday-report');
        const response = await withMinimumTime(fetch('/api/gameday-report'), 1500);
        if (!response.ok) {
          throw new Error('Failed to fetch gameday report');
        }
        const data = await response.json();
        setReport(data);
      } catch (err) {
        logger.error('Error fetching gameday report:', err);
        setError('Unable to load gameday report. Please try again later.');
      }
    });
  }, []);
  return (
    <>
      {isReportLoading && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <SpinningBaseball size={90} />
          {/* <CircularProgress size={60} thickness={4} /> */}
        </Box>
      )}

      {error && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
          color="error.main"
          p={3}
          textAlign="center"
        >
          {error}
        </Box>
      )}

      {!isReportLoading && !error && report && <GamedayReport report={report} />}
    </>
  );
}
