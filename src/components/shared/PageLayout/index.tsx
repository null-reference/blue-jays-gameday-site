import Page from '../Page';
import { Stack } from '@mui/material';
import BlueJaysLogo from '../BlueJaysLogo';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default async function PageLayout({ children }: Readonly<PageLayoutProps>) {
  return (
    <Stack alignItems="center" height="100%" paddingX={3}>
      <BlueJaysLogo />
      <Page>{children}</Page>
    </Stack>
  );
}
