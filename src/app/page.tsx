import { getLatestGamedayStats } from '@/shared/gameday-api';
import { Box, Stack, Typography } from '@mui/material';

export default async function Index() {
  const report = await getLatestGamedayStats();

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Blue Jays Gameday</Typography>
      <Typography variant="body1">See report</Typography>
      <pre>{JSON.stringify(report, null, 2)}</pre>
    </Stack>
  );
}
