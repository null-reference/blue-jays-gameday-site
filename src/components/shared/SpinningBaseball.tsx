'use client';

import { Box, keyframes, Typography } from '@mui/material';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface SpinningBaseballProps {
  size?: number;
  color?: string;
}

export default function SpinningBaseball({ size = 60, color = '#FFFFFF' }: SpinningBaseballProps) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        animation: `${spin} 2s linear infinite`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        fontSize={size * 0.8}
        sx={{
          lineHeight: 1,
          filter:
            color !== '#FFFFFF' ? `hue-rotate(${color === '#134A8E' ? '200deg' : '0deg'})` : 'none',
        }}
      >
        ⚾
      </Typography>
    </Box>
  );
}
