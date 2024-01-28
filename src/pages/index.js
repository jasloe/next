// src/pages/index.tsx
import React from 'react';

import { useRouter } from 'next/router';

import { MetaTags } from '../components/Common/MetaTags';
import { Layout } from '../components/Layout/Layout';
import { fetchLocalMenuData, fetchLocalSiteData } from '../lib/fetchLocalData';

export const getStaticProps = async () => {
  const menuData = fetchLocalMenuData(); // No need to await
  const siteData = fetchLocalSiteData(); // No need to await

  console.log(siteData);
  return { props: { menuData, siteData } };
};

const HomePage = ({ menuData, siteData }) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const fullPath = `${baseUrl}${router.asPath}`;
  const [{ name }] = siteData.sitename;
  const [{ description }] = siteData.statement;

  return (
    <>
      <MetaTags title={name} description={description} url={fullPath} />
      <Layout {...menuData}>
        <div>home page</div>
      </Layout>
    </>
  );
};

export default HomePage;
