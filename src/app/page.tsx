import BattingOrderCard from '@/components/BattingOrderCard';
import FirstPitchCard from '@/components/FirstPitchCard';
import GameInfoCard from '@/components/GameInfoCard';
import PitcherMatchupCard from '@/components/PitcherMatchupCard';
import RankingsCard from '@/components/RankingsCard';
import TeamStatsCard from '@/components/TeamStatsCard';
import { getLatestGamedayReport } from '@/shared/gameday-api';
import { Box, Divider, Stack, Typography } from '@mui/material';

export default async function Index() {
  const report = await getLatestGamedayReport();

  // if (!report) return (
  // )

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
      <Typography variant="body1">
        {report.gameInfo.awayTeam.name} @ {report.gameInfo.homeTeam.name}
      </Typography>
      {/* <Divider sx={{ my: 1 }} /> */}
      <Stack spacing={2} width="100%">
        {/* <pre>{JSON.stringify(report, null, 2)}</pre> */}

        {/* <GameInfoCard gameInfo={report.gameInfo} /> */}
        <TeamStatsCard teamStats={report.teamStats} />
        <PitcherMatchupCard pitchers={report.pitchers} gameInfo={report.gameInfo} />
        <BattingOrderCard battingOrder={report.battingOrder} />
        <FirstPitchCard firstPitch={report.firstPitch} />
        <RankingsCard title="2+ Hit Games" data={report.rankings.twoPlusHitGames} />
        <RankingsCard title="2+ Base Games" data={report.rankings.twoPlusBaseGames} />
        <RankingsCard title="Stolen Bases" data={report.rankings.stolenBases} />
      </Stack>
    </Stack>
  );
}
