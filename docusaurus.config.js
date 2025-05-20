// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flight Club Wiki',
  tagline: 'Flight Club Documentation',
  url: 'https://wiki.tornflight.club',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mobermejo',
  projectName: 'flight-club-wiki',
  trailingSlash: true,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Flight Club Wiki',
        logo: {
          src: '/public/img/airplane.svg'
        },
        items: [],
        hideOnScroll: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Map',
            items: [
              {
                label: 'Wiki',
                to: '/',
              },
              {
                label: 'Internal',
                to: '/internal',
              },
            ],
          }
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'public',
        path: 'docs-public',
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebarsPublic.js'),
        editUrl: 'https://github.com/mobermejo/flight-club-wiki/edit/main/docs-public/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'internal',
        path: 'docs-internal',
        routeBasePath: '/internal',
        sidebarPath: require.resolve('./sidebarsInternal.js'),
        editUrl: 'https://github.com/mobermejo/flight-club-wiki/edit/main/docs-internal/',
      },
    ],
    
  ],

};

export default config;
