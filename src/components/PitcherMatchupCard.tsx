'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { GamedayReport } from '@/shared/gameday-api/types';
import { Stack } from '@mui/material';

interface PitcherMatchupCardProps {
  pitchers: GamedayReport['pitchers'];
  gameInfo: GamedayReport['gameInfo'];
}

const formatPitcherStat = (pitcher: GamedayReport['pitchers']['home']) => {
  if (!pitcher) {
    return 'N/A';
  }
  return `${pitcher.name} (${pitcher.wins}-${pitcher.losses} | ${pitcher.era} era)`;
};

export default function PitcherMatchupCard({ pitchers, gameInfo }: PitcherMatchupCardProps) {
  const awayPitcher = pitchers.away;
  const homePitcher = pitchers.home;
  const awayAbbr = gameInfo.awayTeam.abbreviation;
  const homeAbbr = gameInfo.homeTeam.abbreviation;

  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        Pitchers
      </Typography>

      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <Typography variant="body1" fontWeight="bold" minWidth="35px">
            {awayAbbr}
          </Typography>
          <Typography variant="body1"> {formatPitcherStat(awayPitcher)}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="body1" fontWeight="bold" minWidth="35px">
            {homeAbbr}
          </Typography>
          <Typography variant="body1"> {formatPitcherStat(homePitcher)}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
