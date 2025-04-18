import Page from '../Page';
import { AppBar, Box, Stack, Typography } from '@mui/material';
import ProjectSolarLogo from '../ProjectSolarLogo';
import styles from './styles.module.css';

interface PageProps {
  children: React.ReactNode;
}

export default async function OnboardingPageLayout({ children }: Readonly<PageProps>) {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={styles.responsiveAppBarSizing}
        color="transparent"
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          height="100%"
          paddingX={3}
        >
          <Stack spacing={0.25} width="100%">
            <ProjectSolarLogo />
            {/* left padding added so the text aligns with the text portion of above logo */}
            <Typography
              paddingLeft={3.5}
              color="text.secondary"
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '24px',
              }}
            >
              Partner Portal
            </Typography>
          </Stack>
        </Stack>
      </AppBar>

      {/* empty box to take up the space for the fixed header above */}
      <Box
        className={styles.responsiveAppBarSizing}
        sx={{
          backgroundColor: 'transparent',
        }}
      />

      <Page>{children}</Page>
    </>
  );
}
