import { Box } from '@mui/material';

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: Readonly<PageProps>) {
  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        width: '100%',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
}
