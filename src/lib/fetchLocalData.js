import data from '../data/navigation.json';

export function fetchLocalMenuData() {
  const { main, footer, social, impressum } = data;

  return { main, footer, social, impressum };
}

export function fetchLocalSiteData() {
  const { sitename, statement } = data;
  console.log(data);

  return { sitename, statement };
}
