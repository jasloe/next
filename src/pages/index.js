// src/pages/index.tsx
// TODO: include type checking, fix linter tooling, add types/interfaces

import React from 'react';

import { useRouter } from 'next/router';

import { MetaTags } from '../components/Common/MetaTags';
import { Layout } from '../components/Layout/Layout';
import { fetchLocalMenuData } from '../lib/fetchLocalData';

export const getStaticProps = async () => {
  const menuData = await fetchLocalMenuData();
  const siteData = await fetchLocalSiteData();

  return { props: { menuData, siteData } };
};

const HomePage = ({ menuData, siteData }) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const fullPath = `${baseUrl}${router.asPath}`;
  const { sitename, statement } = siteData;

  return (
    <>
      <MetaTags title={sitename} description={statement} url={fullPath} />
      <Layout data={menuData}>
        <div>home page</div>
      </Layout>
    </>
  );
};

export default HomePage;
