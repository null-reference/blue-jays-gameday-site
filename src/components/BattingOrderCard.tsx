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
import { BattingOrderBatterSummary } from '@/shared/gameday-api/types';

interface BattingOrderCardProps {
  battingOrder: BattingOrderBatterSummary[];
}

// Helper to format average
const formatAvg = (avg: number): string => {
  if (avg === 0) return '.000';
  if (avg === 1) return '1.000';
  return avg.toFixed(3).substring(1); // Format as .XXX
};

export default function BattingOrderCard({ battingOrder }: BattingOrderCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title="Starting Lineup"
        slotProps={{
          title: {
            variant: 'h5',
          },
        }}
      />
      <CardContent sx={{ pt: 0 }}>
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
                  key={batter.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {batter.battingOrder}
                  </TableCell>
                  <TableCell>{batter.name}</TableCell>
                  <TableCell align="right">{formatAvg(batter.avgLast10)}</TableCell>
                  <TableCell align="right">{formatAvg(batter.avgSeason)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
