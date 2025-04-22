'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FirstPitchSummaryStats, GamedayReport } from '@/shared/gameday-api/types';
import { Stack } from '@mui/material';

interface FirstPitchCardProps {
  firstPitch: GamedayReport['firstPitch'];
}

const formatPercent = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

const StatDisplay: React.FC<{
  title: string;
  stats: FirstPitchSummaryStats | null;
}> = ({ title, stats }) => (
  <Box>
    <Typography variant="subtitle2" gutterBottom>
      {title}:
    </Typography>
    <Typography variant="body2" sx={{ pl: 1 }}>
      - Opportunities: {stats?.opportunities ?? 0}
    </Typography>
    <Typography variant="body2" sx={{ pl: 1 }}>
      - Swing: {formatPercent(stats?.swingPercentage ?? 0)}
    </Typography>
    <Typography variant="body2" sx={{ pl: 1 }}>
      - Single: {formatPercent(stats?.singlePercentage ?? 0)}
    </Typography>
    <Typography variant="body2" sx={{ pl: 1 }}>
      - Extra base: {formatPercent(stats?.extraBaseHitPercentage ?? 0)}
    </Typography>
  </Box>
);

export default function FirstPitchCard({ firstPitch }: FirstPitchCardProps) {
  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        First Pitch Stats
      </Typography>

      <Stack spacing={2}>
        <Typography variant="body1" gutterBottom>
          Leading off: <strong>{firstPitch?.batterName ?? 'N/A'}</strong>
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <StatDisplay title="Last 10" stats={firstPitch?.last10 ?? null} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <StatDisplay title="Season" stats={firstPitch?.season ?? null} />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
