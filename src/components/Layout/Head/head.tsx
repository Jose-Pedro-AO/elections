import NextHead from 'next/head';

export function Head() {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      {/* <link rel="icon" type="image/svg+xml" href="/logo.svg" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <title>APARTAMENTOS JAV</title>
    </NextHead>
  );
}
