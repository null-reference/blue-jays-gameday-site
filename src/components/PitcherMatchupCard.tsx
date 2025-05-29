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

interface PitcherMatchupCardProps {
  pitchers: GamedayReport['pitchers'];
  gameInfo: GamedayReport['gameInfo'];
}

export default function PitcherMatchupCard({ pitchers, gameInfo }: PitcherMatchupCardProps) {
  const awayPitcher = pitchers.away;
  const homePitcher = pitchers.home;
  const awayAbbr = gameInfo.awayTeam.abbreviation;
  const homeAbbr = gameInfo.homeTeam.abbreviation;

  // Create table data with both pitchers
  const pitcherData = [
    {
      team: awayAbbr,
      name: awayPitcher?.lastName || 'N/A',
      record: awayPitcher ? `${awayPitcher.wins}-${awayPitcher.losses}` : 'N/A',
      era: awayPitcher?.era || 'N/A',
    },
    {
      team: homeAbbr,
      name: homePitcher?.lastName || 'N/A',
      record: homePitcher ? `${homePitcher.wins}-${homePitcher.losses}` : 'N/A',
      era: homePitcher?.era || 'N/A',
    },
  ];

  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        Pitchers
      </Typography>

      <TableContainer component={Paper} elevation={0}>
        <Table size="small" aria-label="pitcher matchup table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Team</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Record
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                ERA
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pitcherData.map((pitcher) => (
              <TableRow key={pitcher.team}>
                <TableCell component="th" scope="row">
                  {pitcher.team}
                </TableCell>
                <TableCell>{pitcher.name}</TableCell>
                <TableCell align="right">{pitcher.record}</TableCell>
                <TableCell align="right">{pitcher.era}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
