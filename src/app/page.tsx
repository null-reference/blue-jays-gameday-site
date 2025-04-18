import { getLatestGamedayReport } from '@/shared/gameday-api';
import { Box, Stack, Typography } from '@mui/material';

export default async function Index() {
  const report = await getLatestGamedayReport();
  // NOTE: should probably have an isodate in the gameinfo but currently
  //       this is always in Eastern in the api responses.
  const gameDate = report.gameInfo.gameDateStr;
  const gameTime = report.gameInfo.gameTimeStr;

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
