import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Inter:wght@200;300;400;500;600;700;800;900&family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800;6..12,900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />     
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}