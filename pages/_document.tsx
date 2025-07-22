import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-background text-text font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
