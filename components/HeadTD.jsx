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
    <script
      src="https://tracking-cdn.figpii.com/0d93e1300cca600aab9bb3d31c31d157.js"
      async
    />
    <script
      src="https://tracking-cdn.figpii.com/0d93e1300cca600aab9bb3d31c31d157.js"
      defer
    />
    {/* <script type="text/javascript" src="/abscript.js" /> */}
  </Head>
);

export default HeadTD;
