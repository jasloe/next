import React from 'react';

import Head from 'next/head';

export const MetaTags = ({ title, description, url }) => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="format-detection" content="telephone=no" />
    {/* Open Graph / Facebook */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {/* <meta property="og:image" content={imageUrl} /> */}
    <meta property="og:url" content={url} />
    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    {/* <meta property="twitter:image" content={imageUrl} /> */}
  </Head>
);
