import Head from 'next/head';
import Navbar from '../components/Navbar';
import '@styles/globals.scss';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="darkreader-lock" />
        <meta
          name="description"
          content="Honey Juice — alternative rock from Helsinki, Finland."></meta>
        <title>Honey Juice | Official Website</title>
        {/*<link rel="apple-touch-icon" sizes="57x57" href="/static/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static//favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon-192x192.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/favicon-144x144.png" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <link rel="manifest" href="/static/manifest.json" />*/}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;