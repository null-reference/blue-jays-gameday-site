'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { GamedayReport } from '@/shared/gameday-api/types';

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
    <Card sx={{ mb: 2 }}>
      <CardHeader title="# Pitchers" titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1" fontWeight="bold">
              {awayAbbr}
            </Typography>
          </Grid>
          <Grid size={{ xs: 10 }}>
            <Typography variant="body1">- {formatPitcherStat(awayPitcher)}</Typography>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              {homeAbbr}
            </Typography>
          </Grid>
          <Grid size={{ xs: 10 }}>
            <Typography variant="body1">- {formatPitcherStat(homePitcher)}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
