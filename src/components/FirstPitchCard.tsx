'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GamedayReport } from '@/shared/gameday-api/types';
import { Stack } from '@mui/material';

interface FirstPitchCardProps {
  firstPitch: GamedayReport['firstPitch'];
}

const formatPercent = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

export default function FirstPitchCard({ firstPitch }: FirstPitchCardProps) {
  const stats = [
    {
      name: 'Opportunities',
      last10: firstPitch?.last10?.opportunities,
      season: firstPitch?.season?.opportunities,
    },
    {
      name: 'Swing',
      last10: formatPercent(firstPitch?.last10?.swingPercentage ?? 0),
      season: formatPercent(firstPitch?.season?.swingPercentage ?? 0),
    },
    {
      name: 'Single',
      last10: formatPercent(firstPitch?.last10?.singlePercentage ?? 0),
      season: formatPercent(firstPitch?.season?.singlePercentage ?? 0),
    },
    {
      name: 'Extra Base',
      last10: formatPercent(firstPitch?.last10?.extraBaseHitPercentage ?? 0),
      season: formatPercent(firstPitch?.season?.extraBaseHitPercentage ?? 0),
    },
  ];

  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        First Pitch Stats
      </Typography>

      <Stack spacing={2}>
        <Typography variant="body1" gutterBottom>
          Leading off: <strong>{firstPitch?.lastName ?? 'N/A'}</strong>
        </Typography>
        <TableContainer component={Paper} elevation={0} variant="outlined">
          <Table size="small" aria-label="first pitch table">
            <TableHead sx={{ backgroundColor: 'grey.100' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}></TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                  L10
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                  Season
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.map((stat) => (
                <TableRow
                  key={stat.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {stat.name}
                  </TableCell>
                  <TableCell align="right">{stat.last10}</TableCell>
                  <TableCell align="right">{stat.season}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
