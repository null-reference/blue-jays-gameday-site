import { redirect } from 'next/navigation';
import { Link, Stack, Typography } from '@mui/material';

export default async function Index() {
  return (
    // <PublicTwoPanelPageLayout>
    <Stack spacing={2}>
      <Typography variant="h4">Blue Jays Gameday</Typography>
      <Typography variant="body1">See reportl</Typography>
    </Stack>
    // </PublicTwoPanelPageLayout>
  );
}
