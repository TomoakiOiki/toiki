export type PageInfo = {
  title: string;
  description: string;
  url: string;
  isExternal: boolean;
};
export const pageList: PageInfo[] = [
  {
    title: 'About me',
    description: 'Self introduction.Likes, hobbies, etc.',
    url: 'about',
    isExternal: false,
  },
  {
    title: 'Memo',
    description: 'Memo for sharing my thoughts. Like a blog.',
    url: 'memo',
    isExternal: false,
  },
  {
    title: 'Twitter',
    description: 'My twitter account.',
    url: 'https://twitter.com/kn_prg',
    isExternal: true,
  },
  {
    title: 'Github',
    description: 'My github account.',
    url: 'https://github.com/TomoakiOiki',
    isExternal: true,
  },
];
