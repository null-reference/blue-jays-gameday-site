import Page from '../Page';
import { Stack } from '@mui/material';
import BlueJaysLogo from '../BlueJaysLogo';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default async function PageLayout({ children }: Readonly<PageLayoutProps>) {
  return (
    <Stack
      alignItems="center"
      width="100%"
      maxWidth="800px"
      height="100%"
      overflow="hidden"
      paddingX={1}
    >
      <BlueJaysLogo />
      <Page>{children}</Page>
    </Stack>
  );
}
