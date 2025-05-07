'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { GamedayReport } from '@/shared/gameday-api/types';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';

interface GameInfoCardProps {
  gameInfo: GamedayReport['gameInfo'];
}

const getTeamLogo = (teamAbbr: string) => {
  // NOTE: logos from -> https://loodibee.com/mlb/
  switch (teamAbbr) {
    case 'ARI':
      return '/team-logos/diamondbacks-300x300.png';
    case 'ATL':
      return '/team-logos/braves-300x300.png';
    case 'BAL':
      return '/team-logos/orioles-300x300.png';
    case 'BOS':
      return '/team-logos/redsox-300x300.png';
    case 'CHC':
      return '/team-logos/cubs-300x300.png';
    case 'CHW':
    case 'CHS':
      return '/team-logos/whitesox-300x300.png';
    case 'CIN':
      return '/team-logos/reds-300x300.png';
    case 'CLE':
      return '/team-logos/guardians-300x300.png';
    case 'COL':
      return '/team-logos/rockies-300x300.png';
    case 'DET':
      return '/team-logos/tigers-300x300.png';
    case 'FLA':
      return '/team-logos/marlins-300x300.png';
    case 'HOU':
      return '/team-logos/astros-300x300.png';
    case 'KAN':
    case 'KCR':
      return '/team-logos/royals-300x300.png';
    case 'LAA':
      return '/team-logos/angels-300x300.png';
    case 'LAD':
      return '/team-logos/dodgers-300x300.png';
    case 'MIL':
      return '/team-logos/brewers-300x300.png';
    case 'MIN':
      return '/team-logos/twins-300x300.png';
    case 'NYM':
      return '/team-logos/mets-300x300.png';
    case 'NYY':
      return '/team-logos/yankees-300x300.png';
    case 'OAK':
      return '/team-logos/athletics-300x300.png';
    case 'PHI':
      return '/team-logos/phillies-300x300.png';
    case 'PIT':
      return '/team-logos/pirates-300x300.png';
    case 'SD':
      return '/team-logos/padres-300x300.png';
    case 'SF':
      return '/team-logos/giants-300x300.png';
    case 'SEA':
      return '/team-logos/mariners-300x300.png';
    case 'STL':
      return '/team-logos/cardinals-300x300.png';
    case 'TB':
      return '/team-logos/rays-300x300.png';
    case 'TEX':
      return '/team-logos/rangers-300x300.png';
    case 'TOR':
      return '/team-logos/bluejays-300x300.png';
    case 'WAS':
      return '/team-logos/marlins-300x300.png';
  }
  return '/team-logos/mlb-300x300.png';
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
            <Typography variant="caption">
              {gameInfo.awayTeam.wins} - {gameInfo.awayTeam.losses}
            </Typography>
          </Stack>
          <Box>
            <Typography variant="body1">@</Typography>
          </Box>
          <Stack spacing={0} alignItems="center">
            <Typography variant="body1">{gameInfo.homeTeam.name}</Typography>
            <Typography variant="caption">
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
