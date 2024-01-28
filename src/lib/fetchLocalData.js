import data from '../data/navigation.json';

export function fetchLocalMenuData() {
  const { main, footer } = data;
  const { social, impressum } = footer;
  const menuData = { main, footer, social, impressum };
  return { menuData };
}

export function fetchLocalSiteData() {
  const { sitename, statement } = data;

  console.log(data);

  return { sitename, statement };
}
