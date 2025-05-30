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
import { ParkFactorStats, RankedBatterStatSummary } from '@/shared/gameday-api/types';
import { TrendingIcon } from './shared/TrendingIcon';

interface RankingsCardProps {
  title: string;
  data: RankedBatterStatSummary[]; // Use one type, they are structurally identical
  hotPlayers: number[];
  coldPlayers: number[];
  parkFactorStatValue?: number;
}

export default function RankingsCard({
  title,
  data,
  hotPlayers,
  coldPlayers,
  parkFactorStatValue,
}: RankingsCardProps) {
  // Don't render card if no data
  if (data.length === 0) {
    return null;
  }

  const isHotPlayer = (playerId: number) => hotPlayers.includes(playerId);
  const isColdPlayer = (playerId: number) => coldPlayers.includes(playerId);

  const parkFactorStatValueText = parkFactorStatValue ? `PF-${parkFactorStatValue}` : '';

  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
          <Box component="span">{title}</Box>
          {parkFactorStatValue && parkFactorStatValue > 0 ? (
            <Box component="span">{parkFactorStatValueText}</Box>
          ) : null}
        </Stack>
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
            {data.map((player) => (
              <TableRow key={player.lastName}>
                <TableCell component="th" scope="row">
                  {player.lastName}
                  {isHotPlayer(player.playerId) && (
                    <Box component="span" sx={{ pl: 0.25 }}>
                      🔥
                    </Box>
                  )}
                  {!isHotPlayer(player.playerId) && isColdPlayer(player.playerId) && (
                    <Box component="span" sx={{ pl: 0.25 }}>
                      ❄️
                    </Box>
                  )}
                </TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <TrendingIcon trend={player.trending} />
                    <Box component="span">{player.statLast10}</Box>
                  </Box>
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
