'use client';

import { useEffect } from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { Logger } from '@/shared/logger';

const logger = new Logger({
  prefix: 'error-page',
});

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error(`Error: ${error.message}`, error);
  }, [error]);

  return (
    <Stack spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
      <Typography variant="h4">Uh oh! Something went wrong.</Typography>
      <Button onClick={reset}>Back to Safety</Button>
    </Stack>
  );
}
