'use client';

import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Stack,
  Box,
} from '@mui/material';
import { GamedayReport } from '@/shared/gameday-api/types';
import { getTeamLogo } from '@/shared/utils';

interface TeamStatsCardProps {
  teamStats: GamedayReport['teamStats'];
}

const getGameDateString = (dateStr: string) => {
  // return as "May 15"
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const getGameIndicator = (blueJaysScore: number, opponentScore: number) => {
  const scoreDiff = blueJaysScore - opponentScore;

  if (scoreDiff >= 8) {
    return '🦍'; // Big win (8+ runs)
  } else if (scoreDiff >= 5) {
    return '💪'; // Good win (5-7 runs)
  } else if (scoreDiff <= -8) {
    return '💔'; // Big loss (8+ runs)
  } else if (scoreDiff <= -5) {
    return '🤦‍♂️'; // Bad loss (5-7 runs)
  }
  return null; // Close game, no indicator
};

export default function TeamStatsCard({ teamStats }: TeamStatsCardProps) {
  // Prepare last 5 scores data for table
  const scoresData = teamStats.last5Scores.slice(0, 5).map((score, index) => ({
    game: index + 1,
    gameDateStr: getGameDateString(score.gameDate),
    blueJaysScore: score.blueJaysScore,
    opponentScore: score.opponentScore,
    opponent: score.opponentAbbr,
    result: score.blueJaysScore > score.opponentScore ? 'W' : 'L',
    indicator: getGameIndicator(score.blueJaysScore, score.opponentScore),
    scoreDiff: Math.abs(score.blueJaysScore - score.opponentScore),
  }));

  // Check if any row has an indicator to determine if we should show the indicator column
  const hasAnyIndicator = scoresData.some((score) => score.indicator);

  // Prepare average scores data for table
  const avgScoresData = [
    {
      period: 'Last 10',
      jaysAvg: teamStats.avgScoresLast10.jays.toFixed(1),
      opponentAvg: teamStats.avgScoresLast10.opponent.toFixed(1),
    },
    {
      period: 'Season',
      jaysAvg: teamStats.avgScoresSeason.jays.toFixed(1),
      opponentAvg: teamStats.avgScoresSeason.opponent.toFixed(1),
    },
  ];

  return (
    <Stack spacing={3} padding={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>
        Team Stats
      </Typography>

      <Stack spacing={2}>
        <Typography variant="subtitle1" gutterBottom>
          Last 5 Scores:
        </Typography>
        <TableContainer component={Paper} elevation={0}>
          <Table size="small" aria-label="last 5 scores">
            {' '}
            <TableHead>
              <TableRow>
                {hasAnyIndicator && (
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 'bold', width: '20px', padding: '4px' }}
                  ></TableCell>
                )}
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Date
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  {teamStats.blueJaysAbbr}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  OPP
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>VS</TableCell>
              </TableRow>
            </TableHead>{' '}
            <TableBody>
              {scoresData.map((score) => (
                <TableRow key={score.game}>
                  {hasAnyIndicator && (
                    <TableCell
                      align="center"
                      sx={{ fontSize: '1.1em', width: '20px', py: '4px', pl: '6px', pr: '0px' }}
                    >
                      {score.indicator}
                    </TableCell>
                  )}
                  <TableCell align="center">{score.gameDateStr}</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 'bold',
                      color: score.result === 'W' ? 'green' : 'red',
                    }}
                  >
                    {score.blueJaysScore}
                  </TableCell>
                  <TableCell align="center">{score.opponentScore}</TableCell>
                  <TableCell>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Image
                        src={getTeamLogo(score.opponent)}
                        alt={score.opponent}
                        width={24}
                        height={24}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle1" gutterBottom>
          Average Scores:
        </Typography>
        <TableContainer component={Paper} elevation={0}>
          <Table size="small" aria-label="average scores">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Period</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                  {teamStats.blueJaysAbbr}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                  OPP
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {avgScoresData.map((avg) => (
                <TableRow key={avg.period}>
                  <TableCell>{avg.period}</TableCell>
                  <TableCell align="right">{avg.jaysAvg}</TableCell>
                  <TableCell align="right">{avg.opponentAvg}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
