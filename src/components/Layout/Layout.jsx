// src/components/Layout/Layout

// TODO: include type checking, fix linter tooling, add types/interfaces

import React from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => (
  <div className="l-container">
    {/* <Notice data={ } /> */}
    {/* <Header data={ } /> */}
    <main>{children}</main>
    {/* <Footer data={ } /> */}
  </div>
);
