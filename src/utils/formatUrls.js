// src/utils/formatUrls.js
import React from 'react';

import Link from 'next/link';

/**
 * Renders a menu item based on the URL type.
 *
 * @param {Object} link - The link object with name and URL.
 * @returns {JSX.Element} JSX element for the menu item.
 */

export const renderMenuItem = ({ name, url }) => {
  if (!url) {
    return <span>{name}</span>;
  }

  const isExternal = /^(http|https):\/\//.test(url);
  return isExternal ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  ) : (
    <Link href={url}>{name}</Link>
  );
};
