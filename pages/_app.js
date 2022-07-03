import '../styles/globals.css'

// import the Head component for appending elements to the head of the page
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" type = "image/x-icon" href = "/favicon.ico" />        
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jonbell" />
        <meta name="twitter:title" content="Maybe All That Matters is How You Treat People" />
        <meta name="twitter:description" content="Remembering Mike Kruzeniski one year later" />
        <meta name="twitter:image" content="http://maybeallthatmatters.com/tweetcard.png" />
             
      </Head>      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;