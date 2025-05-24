// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const isInternal = process.env.DOCS_ENV === 'internal';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: isInternal ? 'Flight Club Internal Docs' : 'Flight Club Wiki',
  tagline: 'Flight Club Documentation',
  url: isInternal ? 'https://internal.tornflight.club' : 'https://wiki.tornflight.club',
  baseUrl: '/',
  favicon: 'img/airplane.svg',
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
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/staff-members.css'),
          ],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: isInternal ? 'Flight Club Internal Docs' : 'Flight Club Wiki',
        logo: {
          src: '/img/airplane.svg'
        },
        items: [],
        hideOnScroll: false,
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
        id: isInternal ? 'internal' : 'public',
        path: isInternal ? 'docs-internal' : 'docs-public',
        routeBasePath: '/',
        sidebarPath: require.resolve(
          isInternal ? './sidebarsInternal.js' : './sidebarsPublic.js'
        ),
        ...(isInternal && {
          editUrl: `https://github.com/torn-flight-club/flight-club-wiki/edit/main/docs-internal/`,
        }),
      },
    ],
  ],
};

export default config;
