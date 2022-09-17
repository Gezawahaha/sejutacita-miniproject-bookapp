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
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default HeadTD;
