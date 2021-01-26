import React from 'react';
import Head from 'next/head';
import db from '../../../bd.json';

function IndexPage() {
  const title = 'Alura Quiz';
  const description = 'Um projeto criado com amor durante a imersão React v2';
  const url = 'https://aluraquiz.danilose.vercel.app/';
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{ title }</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={db.bg} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={db.bg} />
      </Head>
    </>
  );
}

export default IndexPage;
