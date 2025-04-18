import PageLayout from './shared/PageLayout';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}
