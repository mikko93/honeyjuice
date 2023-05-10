import Head from 'next/head';
import Navbar from '../components/Navbar';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="darkreader-lock"></meta>
        <meta
          name="description"
          content="Honey Juice — alternative rock from Helsinki, Finland."></meta>
        <title>Honey Juice</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
        <link rel="manifest" href="/static/site.webmanifest"/>
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/static/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="msapplication-config" content="/static/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;