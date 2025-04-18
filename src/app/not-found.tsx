import { Button, Stack, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Page Not Found</Typography>
      <Typography variant="body1">
        We couldn&apos;t find the page you were looking for. It might have moved, been renamed, or
        maybe it never existed in the first place!
      </Typography>
      <Button href="/">Go Home</Button>
    </Stack>
  );
}
