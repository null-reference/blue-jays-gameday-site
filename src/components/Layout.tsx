import { Stack } from '@mui/material';
import BlueJaysLogo from './shared/BlueJaysLogo';
import Page from './shared/Page';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      alignItems="center"
      width="100%"
      maxWidth="800px"
      height="100%"
      overflow="hidden"
      paddingX={1}
      paddingY={3}
      sx={{
        backgroundColor: 'background.default',
      }}
    >
      <BlueJaysLogo />
      <Page>{children}</Page>
    </Stack>
  );
}
