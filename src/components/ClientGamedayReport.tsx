'use client';

import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { GamedayReport as ApiGamedayReport } from '@/shared/gameday-api/types';
import { Logger } from '@/shared/logger';
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
        const response = await fetch('/api/gameday-report');
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

  if (isReportLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <SpinningBaseball size={90} />
        {/* <CircularProgress size={60} thickness={4} /> */}
      </Box>
    );
  }

  if (error) {
    return (
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
    );
  }

  if (!report) {
    return null;
  }

  return <GamedayReport report={report} />;
}
