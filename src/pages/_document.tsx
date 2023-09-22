import { Html, Head, Main, NextScript } from 'next/document';
import HeartIcon from '@mui/icons-material/Favorite';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>The Wedding of Nadiah & Dian</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
