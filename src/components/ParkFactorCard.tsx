'use client';

import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ParkFactorStats } from '@/shared/gameday-api/types';

interface ParkFactorCardProps {
  parkFactor: ParkFactorStats | null;
}

export default function ParkFactorCard({ parkFactor }: ParkFactorCardProps) {
  // Don't render card if no park factor data
  if (!parkFactor) {
    return null;
  }

  // Helper function to get color based on park factor value
  const getValueColor = (value: number) => {
    if (value > 100) return 'green';
    if (value < 95) return 'red';
    if (value < 100) return 'darkorange';
    return 'black';
  };

  const stats = [
    {
      name: 'Overall Park Factor',
      value: parkFactor.parkFactor,
    },
    {
      name: 'Runs',
      value: parkFactor.runs,
    },
    {
      name: 'On Base %',
      value: parkFactor.onBasePercentage,
    },
    {
      name: 'Hits',
      value: parkFactor.hits,
    },
    {
      name: 'Singles',
      value: parkFactor.singles,
    },
    {
      name: 'Doubles',
      value: parkFactor.doubles,
    },
    {
      name: 'Triples',
      value: parkFactor.triples,
    },
    {
      name: 'Home Runs',
      value: parkFactor.homeRuns,
    },
    {
      name: 'Walks',
      value: parkFactor.walks,
    },
    {
      name: 'Strikeouts',
      value: parkFactor.strikeouts,
    },
  ];

  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        Park Factor - {parkFactor.venueName}
      </Typography>

      <TableContainer component={Paper} elevation={0}>
        <Table size="small" aria-label="park factor table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Stat</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Factor
              </TableCell>
            </TableRow>
          </TableHead>{' '}
          <TableBody>
            {stats.map((stat) => (
              <TableRow key={stat.name}>
                <TableCell component="th" scope="row">
                  {stat.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontWeight: 'bold',
                    color: getValueColor(stat.value),
                  }}
                >
                  {stat.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
