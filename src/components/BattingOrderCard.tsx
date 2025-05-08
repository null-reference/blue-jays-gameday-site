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
import { TrendingIcon } from './shared/TrendingIcon';

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

export default function BattingOrderCard({ battingOrder, hotPlayers }: BattingOrderCardProps) {
  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        Starting Lineup
      </Typography>

      <TableContainer component={Paper} elevation={0}>
        <Table size="small" aria-label="batting order table">
          <TableHead>
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
