'use client';

import * as React from 'react';
import { Divider, Stack } from '@mui/material';
import BattingOrderCard from '@/components/BattingOrderCard';
import FirstPitchCard from '@/components/FirstPitchCard';
import GameInfo from '@/components/GameInfo';
import ParkFactorCard from '@/components/ParkFactorCard';
import PitcherMatchupCard from '@/components/PitcherMatchupCard';
import RankingsCard from '@/components/RankingsCard';
import TeamStatsCard from '@/components/TeamStatsCard';
import FadeInSection from '@/components/shared/FadeInSection';
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
  const coldPlayers = report.coldPlayers.map((player) => player.playerId);

  // Filter out players with 0 in both L10 and Season for stolen bases
  const stolenBaseReportData = report.rankings.stolenBases.filter(
    (p) => p.statLast10 > 0 || p.statSeason > 0,
  );

  return (
    <Stack spacing={2} width="100%" paddingY={4}>
      <FadeInSection>
        <GameInfo gameInfo={report.gameInfo} />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <TeamStatsCard teamStats={report.teamStats} />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={200}>
        <PitcherMatchupCard pitchers={report.pitchers} gameInfo={report.gameInfo} />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <BattingOrderCard
          battingOrder={report.battingOrder}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <FirstPitchCard firstPitch={report.firstPitch} />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <ParkFactorCard parkFactor={report.parkFactor} />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="Homeruns"
          data={report.rankings.homeruns}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
          parkFactorStatValue={report.parkFactor?.homeRuns}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="Doubles"
          data={report.rankings.doubles}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
          parkFactorStatValue={report.parkFactor?.doubles}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="Triples"
          data={report.rankings.triples}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
          parkFactorStatValue={report.parkFactor?.triples}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="Stolen Bases"
          data={stolenBaseReportData}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="2+ RBI Games"
          data={report.rankings.twoPlusRbiGames}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
          parkFactorStatValue={report.parkFactor?.runs}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="3+ RBI Games"
          data={report.rankings.threePlusRbiGames}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
          parkFactorStatValue={report.parkFactor?.runs}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="2+ Hit Games"
          data={report.rankings.twoPlusHitGames}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
          parkFactorStatValue={report.parkFactor?.hits}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="3+ Hit Games"
          data={report.rankings.threePlusHitGames}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
          parkFactorStatValue={report.parkFactor?.hits}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="2+ Base Games"
          data={report.rankings.twoPlusBaseGames}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
        />
        <FullWidthDivider />
      </FadeInSection>

      <FadeInSection delay={100}>
        <RankingsCard
          title="3+ Base Games"
          data={report.rankings.threePlusBaseGames}
          hotPlayers={hotPlayers}
          coldPlayers={coldPlayers}
        />
      </FadeInSection>
    </Stack>
  );
}
