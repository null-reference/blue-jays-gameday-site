import type { Metadata } from 'next';
import Script from 'next/script';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Public_Sans } from 'next/font/google';
import theme from '../theme';

import './globals.css';

const publicSans = Public_Sans({
  // weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--public-sans', // define a CSS variable for easy use in styles
});

import Layout from '@/components/Layout';
import { Box, CssBaseline } from '@mui/material';

export const metadata: Metadata = {
  title: 'Blue Jays Gameday',
  description: 'Distilled statistics for the Boys in Blue.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <Script id="datadog-logs">
        {`
          (function() {
            if (!'${process.env.DATADOG_LOG_CLIENT_TOKEN ?? ''}') {
              console.debug('Datadog LOGS is disabled');
              return;
            }
            (function(h,o,u,n,d) {
              h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
              d=o.createElement(u);d.async=1;d.src=n
              n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
            })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v5/datadog-logs.js','DD_LOGS')
            window.DD_LOGS.onReady(function() {
              window.DD_LOGS.init({
                clientToken: '${process.env.DATADOG_LOG_CLIENT_TOKEN ?? ''}',
                site: 'datadoghq.com',
                service: 'blue-jays-gameday-site-${process.env.ENV ?? ''}',
                env: '${process.env.ENV ?? ''}',
                sessionSampleRate: 100,
                forwardErrorsToLogs: true,
                forwardConsoleLogs: 'all',
                version: '${process.env.VERCEL_GIT_COMMIT_SHA ?? 'unknown_version'}',
              });
            })
          })();
        `}
      </Script>
      <Script id="datadog-rum">
        {/* https://docs.datadoghq.com/real_user_monitoring/guide/monitor-your-nextjs-app-with-rum/?tab=cdnasync */}
        {`
          (function() {
            if (!'${process.env.DATADOG_RUM_CLIENT_TOKEN ?? ''}') {
              console.debug('Datadog RUM is disabled');
              return;
            }
            (function(h,o,u,n,d) {
              h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
              d=o.createElement(u);d.async=1;d.src=n
              n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
            })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js','DD_RUM')
            window.DD_RUM.onReady(function() {
              window.DD_RUM.init({
                clientToken: '${process.env.DATADOG_RUM_CLIENT_TOKEN ?? ''}',
                applicationId: '${process.env.DATADOG_RUM_APPLICATION_ID ?? ''}',
                site: 'datadoghq.com',
                service: 'blue-jays-gameday-site-${process.env.ENV ?? ''}',
                env: '${process.env.ENV ?? ''}',
                sessionSampleRate: 100,
                sessionReplaySampleRate: ${parseInt(
                  process.env.DATADOG_RUM_SESSION_SAMPLE_RATE || '0',
                )},
                trackUserInteractions: true,
                trackResources: true,
                trackLongTasks: true,
                defaultPrivacyLevel: 'allow',
                version: '${process.env.VERCEL_GIT_COMMIT_SHA ?? 'unknown_version'}',
              });
            })
          })();
        `}
      </Script>
      <Box
        component="body"
        className={`antialiased`}
        sx={{ backgroundColor: 'rgba(128, 176, 216, 0.2)' }}
      >
        <AppRouterCacheProvider>
          {/* https://mui.com/material-ui/react-css-baseline/#global-reset */}
          <CssBaseline />
          {/* https://mui.com/material-ui/integrations/nextjs/ */}
          <ThemeProvider theme={theme}>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </html>
  );
}
