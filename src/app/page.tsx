import { getLatestGamedayStats } from '@/shared/gameday-api';
import { Box, Stack, Typography } from '@mui/material';

export default async function Index() {
  const report = await getLatestGamedayStats();
  const gameDateAndTime = new Date(report.gameDate);
  const gameDate = gameDateAndTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const gameTime = gameDateAndTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <Stack spacing={2} alignItems="center" paddingY={4}>
      <Typography variant="h4">Blue Jays Gameday Report</Typography>
      <Typography variant="subtitle1">
        {gameDate} @ {gameTime}
      </Typography>
      <Stack spacing={2} width="100%">
        <pre>{JSON.stringify(report, null, 2)}</pre>
      </Stack>
    </Stack>
  );
}
