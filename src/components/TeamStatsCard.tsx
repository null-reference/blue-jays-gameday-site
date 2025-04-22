'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { GamedayReport } from '@/shared/gameday-api/types';

interface TeamStatsCardProps {
  teamStats: GamedayReport['teamStats'];
}

// Helper to format score string
const formatScore = (
  score: GamedayReport['teamStats']['last5Scores'][0],
  jaysAbbr: string,
): string => {
  return `${jaysAbbr} ${score.blueJaysScore}-${score.opponentScore} ${score.opponentAbbr}`;
};

export default function TeamStatsCard({ teamStats }: TeamStatsCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title="Team Stats"
        slotProps={{
          title: {
            variant: 'h5',
          },
        }}
      />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          Last 5 Scores:
        </Typography>
        <List dense disablePadding sx={{ pl: 2, mb: 2 }}>
          {teamStats.last5Scores.slice(0, 5).map(
            (
              score,
              index, // Ensure only 5 are shown
            ) => (
              <ListItem key={index} disableGutters disablePadding>
                <ListItemText
                  primary={`${index + 1}. ${formatScore(score, teamStats.blueJaysAbbr)}`}
                />
              </ListItem>
            ),
          )}
        </List>
        <Divider sx={{ my: 1 }} />
        <Typography variant="subtitle1" gutterBottom>
          Avg. Scores:
        </Typography>
        <Box sx={{ pl: 2 }}>
          <Typography variant="body2">
            Last 10: {teamStats.blueJaysAbbr} {teamStats.avgScoresLast10.jays.toFixed(1)} -{' '}
            {teamStats.avgScoresLast10.opponent.toFixed(1)} OPP
          </Typography>
          <Typography variant="body2">
            Season: {teamStats.blueJaysAbbr} {teamStats.avgScoresSeason.jays.toFixed(1)} -{' '}
            {teamStats.avgScoresSeason.opponent.toFixed(1)} OPP
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
