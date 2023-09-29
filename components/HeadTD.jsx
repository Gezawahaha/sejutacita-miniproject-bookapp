import React from 'react';
import Head from 'next/head';

const HeadTD = ({ newTitle, newDesc }) => (
  <Head>
    <title>
      {newTitle
        ? `${newTitle} | Sejuta Cita Book's App`
        : `Sejuta Cita Book's App`}
    </title>
    <meta
      name="description"
      content={
        newDesc
          ? `${newDesc}`
          : `This Official Sejuta Cita Book's App. You can read anything book's just visit this website`
      }
    />
    <link rel="icon" href="/favicon.webp" />
    <script>!function(){var n=document.createElement('script');n.crossOrigin='anonymous',n.async='async',n.src='https://tracking-cdn.figpii.com/df80bb2c884020af582babcfbf7aeaea.js',document.head.append(n),window._fpEvent=window._fpEvent||[]}();</script>
    
  </Head>
);

export default HeadTD;
