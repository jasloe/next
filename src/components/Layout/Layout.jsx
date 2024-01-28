// src/components/Layout/Layout

// TODO: include type checking, fix linter tooling, add types/interfaces

import React from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = ({ children, menuData }) => {
  console.log('layout');
  return (
    <div className="l-container">
      {/* <Notice data={ } /> */}
      <Header {...menuData} />
      <main>{children}</main>
      {/* <Footer data={ } /> */}
    </div>
  );
};
