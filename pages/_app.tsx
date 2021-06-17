import "tailwindcss/tailwind.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>NextJS-Boilerplate</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#00D1C7" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
