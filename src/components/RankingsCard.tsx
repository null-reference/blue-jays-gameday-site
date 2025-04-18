'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
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
}

export default function RankingsCard({ title, data }: RankingsCardProps) {
  // Filter out players with 0 in both L10 and Season for stolen bases
  const filteredData = title.toLowerCase().includes('stolen')
    ? data.filter((p) => p.statLast10 > 0 || p.statSeason > 0)
    : data;

  // Don't render card if no data after filtering
  if (filteredData.length === 0) {
    return null;
  }

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title={`# ${title} (L10, S)`}
        slotProps={{
          title: {
            variant: 'h5',
          },
        }}
      />
      <CardContent sx={{ pt: 0 }}>
        <TableContainer component={Paper} elevation={0} variant="outlined">
          <Table size="small" aria-label={`${title} table`}>
            <TableHead sx={{ backgroundColor: 'grey.100' }}>
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
                  key={player.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {player.name}
                  </TableCell>
                  <TableCell align="right">{player.statLast10}</TableCell>
                  <TableCell align="right">{player.statSeason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
