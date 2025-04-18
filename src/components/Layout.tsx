export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE: add any site-wide layout here
  return <>{children}</>;
}
