// @/components/Header/Header

/* eslint-disable react/prop-types */ // TODO: include type checking, fix linter tooling, add types/interfaces

import React from 'react';

import { Sitename } from '../Common/Sitename';
import { MainMenu } from '../Menus/MainMenu';

export const Header = ({ main }) => {
  console.log(main);
  return (
    <header>
      <div className="sitename">
        {/* <Sitename data={sitename} /> */}
        <MainMenu menuItems={main} />
      </div>
    </header>
  );
};
