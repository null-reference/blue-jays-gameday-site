'use client';

import * as React from 'react';
import { Divider, Stack } from '@mui/material';
import BattingOrderCard from '@/components/BattingOrderCard';
import FirstPitchCard from '@/components/FirstPitchCard';
import GameInfo from '@/components/GameInfo';
import PitcherMatchupCard from '@/components/PitcherMatchupCard';
import RankingsCard from '@/components/RankingsCard';
import TeamStatsCard from '@/components/TeamStatsCard';
import { GamedayReport as ApiGamedayReport } from '@/shared/gameday-api/types';

const FullWidthDivider = () => (
  <Divider sx={{ py: 1, borderColor: 'grey.500' }} variant="fullWidth" />
);

interface GamedayReportProps {
  report: ApiGamedayReport;
}

export default function GamedayReport({ report }: GamedayReportProps) {
  // TODO: make stats into tables where applicable
  // TODO: add quick links to navigate to a section of the page (dropdown?)

  const hotPlayers = report.hotPlayers.map((player) => player.playerId);

  return (
    <Stack spacing={2} width="100%" paddingY={4}>
      <GameInfo gameInfo={report.gameInfo} />
      <FullWidthDivider />

      <TeamStatsCard teamStats={report.teamStats} />
      <FullWidthDivider />

      <PitcherMatchupCard pitchers={report.pitchers} gameInfo={report.gameInfo} />
      <FullWidthDivider />

      <BattingOrderCard battingOrder={report.battingOrder} hotPlayers={hotPlayers} />
      <FullWidthDivider />

      <FirstPitchCard firstPitch={report.firstPitch} />
      <FullWidthDivider />

      <RankingsCard title="Homeruns" data={report.rankings.homeruns} hotPlayers={hotPlayers} />
      <FullWidthDivider />

      <RankingsCard title="Doubles" data={report.rankings.doubles} hotPlayers={hotPlayers} />
      <FullWidthDivider />

      <RankingsCard title="Triples" data={report.rankings.triples} hotPlayers={hotPlayers} />
      <FullWidthDivider />

      <RankingsCard
        title="Stolen Bases"
        data={report.rankings.stolenBases}
        hotPlayers={hotPlayers}
      />
      <FullWidthDivider />

      <RankingsCard
        title="2+ RBI Games"
        data={report.rankings.twoPlusRbiGames}
        hotPlayers={hotPlayers}
      />
      <FullWidthDivider />

      <RankingsCard
        title="3+ RBI Games"
        data={report.rankings.threePlusRbiGames}
        hotPlayers={hotPlayers}
      />
      <FullWidthDivider />

      <RankingsCard
        title="2+ Hit Games"
        data={report.rankings.twoPlusHitGames}
        hotPlayers={hotPlayers}
      />
      <FullWidthDivider />

      <RankingsCard
        title="3+ Hit Games"
        data={report.rankings.threePlusHitGames}
        hotPlayers={hotPlayers}
      />
      <FullWidthDivider />

      <RankingsCard
        title="2+ Base Games"
        data={report.rankings.twoPlusBaseGames}
        hotPlayers={hotPlayers}
      />
      <FullWidthDivider />

      <RankingsCard
        title="3+ Base Games"
        data={report.rankings.threePlusBaseGames}
        hotPlayers={hotPlayers}
      />
    </Stack>
  );
}
