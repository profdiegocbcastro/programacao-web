export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <h1>Portal da COCSI</h1>

        <hr />
        {children}
      </body>
    </html>
  );
}