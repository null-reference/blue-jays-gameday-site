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

interface RankingsCardProps {
  title: string;
  data: RankedBatterStatSummary[]; // Use one type, they are structurally identical
  hotPlayers: number[];
}

const TrendingIcon = ({ trend }: { trend: 'up' | 'down' | 'neutral' }) => {
  if (trend === 'up') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
        width="24"
        height="24"
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
      width="24"
      height="24"
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

      <TableContainer component={Paper} elevation={0} variant="outlined">
        <Table size="small" aria-label={`${title} table`}>
          <TableHead sx={{ backgroundColor: 'grey.100' }}>
            <TableRow>
              <TableCell align="center" sx={{ px: 0, width: '40px' }}>
                {' '}
              </TableCell>
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
                key={player.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* https://lucide.dev/icons/arrow-up */}
                <TableCell
                  align="center"
                  sx={{ px: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <TrendingIcon trend={player.trending} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {player.name}
                  {hotPlayers.includes(player.playerId) && (
                    <Box component="span" sx={{ pl: 0.25 }}>
                      🔥
                    </Box>
                  )}
                </TableCell>
                <TableCell align="right">{player.statLast10}</TableCell>
                <TableCell align="right">{player.statSeason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
