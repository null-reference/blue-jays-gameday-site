'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GamedayReport } from '@/shared/gameday-api/types';

interface GameInfoCardProps {
  gameInfo: GamedayReport['gameInfo'];
}

export default function GameInfoCard({ gameInfo }: GameInfoCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Blue Jays Gameday Report
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {gameInfo.gameDateStr}
        </Typography>
        <Typography variant="body1">{gameInfo.matchupString}</Typography>
      </CardContent>
    </Card>
  );
}
