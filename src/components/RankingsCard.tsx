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
import { RankedBatterStatSummary } from '@/shared/gameday-api/types';
import { TrendingIcon } from './shared/TrendingIcon';

interface RankingsCardProps {
  title: string;
  data: RankedBatterStatSummary[]; // Use one type, they are structurally identical
  hotPlayers: number[];
}

export default function RankingsCard({ title, data, hotPlayers }: RankingsCardProps) {
  // Filter out players with 0 in both L10 and Season for stolen bases
  const filteredData = title.toLowerCase().includes('stolen')
    ? data.filter((p) => p.statLast10 > 0 || p.statSeason > 0)
    : data;

  // Don't render card if no data after filtering
  if (filteredData.length === 0) {
    return null;
  }

  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <TableContainer component={Paper} elevation={0}>
        <Table size="small" aria-label={`${title} table`}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Player</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                L10
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Season
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((player) => (
              <TableRow
                key={player.lastName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {player.lastName}
                  {hotPlayers.includes(player.playerId) && (
                    <Box component="span" sx={{ pl: 0.25 }}>
                      🔥
                    </Box>
                  )}
                </TableCell>
                <TableCell align="right" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TrendingIcon trend={player.trending} />
                  <Box component="span">{player.statLast10}</Box>
                </TableCell>
                <TableCell align="right">{player.statSeason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
