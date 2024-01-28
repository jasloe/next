// src/components/Menus/MainMenu

import React from 'react';

import { MainMenuItem } from './MainMenuItem';

export const MainMenu = ({ menuItems }) => {
  console.log(menuItems);
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          <MainMenuItem link={item} />
        </li>
      ))}
    </ul>
  );
};
