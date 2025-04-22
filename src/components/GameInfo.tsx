'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { GamedayReport } from '@/shared/gameday-api/types';
import { Stack } from '@mui/material';
import Image from 'next/image';

interface GameInfoCardProps {
  gameInfo: GamedayReport['gameInfo'];
}

const getTeamLogo = (teamAbbr: string) => {
  switch (teamAbbr) {
    case 'TOR':
      return '/team-logos/bluejays-300x300.png';
    case 'HOU':
      return '/team-logos/astros-300x300.png';
  }
  return '';
};

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
        <Image
          src={getTeamLogo(gameInfo.awayTeam.abbreviation)}
          alt={gameInfo.awayTeam.name}
          width={32}
          height={32}
        />
        <Typography variant="body1">
          {gameInfo.awayTeam.name} @ {gameInfo.homeTeam.name}
        </Typography>
        <Image
          src={getTeamLogo(gameInfo.homeTeam.abbreviation)}
          alt={gameInfo.homeTeam.name}
          width={32}
          height={32}
        />
      </Stack>
    </Stack>
  );
}
