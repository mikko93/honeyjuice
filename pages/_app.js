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
          content="Homepage of Honey Juice, an alternative rock band from Helsinki, Finland."></meta>
        <title>Honey Juice</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;