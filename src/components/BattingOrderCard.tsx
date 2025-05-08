'use client';

import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BattingOrderBatterSummary } from '@/shared/gameday-api/types';

interface BattingOrderCardProps {
  battingOrder: BattingOrderBatterSummary[];
  hotPlayers: number[];
}

// Helper to format average
const formatAvg = (avg: number): string => {
  if (avg === 0) return '.000';
  if (avg === 1) return '1.000';
  return avg.toFixed(3).substring(1); // Format as .XXX
};

const TrendingIcon = ({ trend }: { trend: 'up' | 'down' | 'neutral' }) => {
  const width = 16;
  const height = 16;

  if (trend === 'up') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="green"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    );
  } else if (trend === 'down') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="red"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="grey"
    >
      <path d="M5 12h14" />
    </svg>
  );
};

export default function BattingOrderCard({ battingOrder, hotPlayers }: BattingOrderCardProps) {
  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        Starting Lineup
      </Typography>

      <TableContainer component={Paper} elevation={0} variant="outlined">
        <Table size="small" aria-label="batting order table">
          <TableHead sx={{ backgroundColor: 'grey.100' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Player</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                L10 Avg
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                S Avg
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {battingOrder.map((batter) => (
              <TableRow
                key={batter.lastName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {batter.battingOrder}
                </TableCell>
                <TableCell>
                  {batter.lastName}
                  {hotPlayers.includes(batter.playerId) && (
                    <Box component="span" sx={{ pl: 0.25 }}>
                      🔥
                    </Box>
                  )}
                </TableCell>
                <TableCell align="right" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TrendingIcon trend={batter.avgLast10Trending} />
                  <Box component="span">{formatAvg(batter.avgLast10)}</Box>
                </TableCell>
                <TableCell align="right">{formatAvg(batter.avgSeason)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
