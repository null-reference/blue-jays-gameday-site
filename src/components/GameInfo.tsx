'use client';

import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GamedayReport } from '@/shared/gameday-api/types';
import { getTeamLogo } from '@/shared/utils';
import Image from 'next/image';

interface GameInfoCardProps {
  gameInfo: GamedayReport['gameInfo'];
}

export default function GameInfo({ gameInfo }: GameInfoCardProps) {
  // NOTE: should probably have an isodate in the gameinfo but currently
  //       this is always in Eastern in the api responses.
  const gameDate = gameInfo.gameDateStr;
  const gameTime = gameInfo.gameTimeStr;

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4">Blue Jays Gameday Report</Typography>
      <Typography variant="subtitle1">
        {gameDate} @ {gameTime}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box>
          <Image
            src={getTeamLogo(gameInfo.awayTeam.abbreviation)}
            alt={gameInfo.awayTeam.name}
            width={32}
            height={32}
          />
        </Box>
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <Stack spacing={0} alignItems="center">
            <Typography variant="body1">{gameInfo.awayTeam.name}</Typography>
            <Typography variant="body2">
              {gameInfo.awayTeam.wins} - {gameInfo.awayTeam.losses}
            </Typography>
          </Stack>
          <Box>
            <Typography variant="body1">@</Typography>
          </Box>
          <Stack spacing={0} alignItems="center">
            <Typography variant="body1">{gameInfo.homeTeam.name}</Typography>
            <Typography variant="body2">
              {gameInfo.homeTeam.wins} - {gameInfo.homeTeam.losses}
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Image
            src={getTeamLogo(gameInfo.homeTeam.abbreviation)}
            alt={gameInfo.homeTeam.name}
            width={32}
            height={32}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
