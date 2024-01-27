// @/components/Header/Header

/* eslint-disable react/prop-types */ // TODO: include type checking, fix linter tooling, add types/interfaces

import React from 'react';

import { Sitename } from './Sitename';

export const Header = ({ mainNav }) => (
  <header>
    <div className="site-name">
      <Sitename sitename={sitename} />
    </div>
  </header>
);
