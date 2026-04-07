// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProJava',
  tagline: '专业 Java 学习+面试指南+编程资源',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://java2-top-git-master-drowningincodes-projects.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'drowning-in-codes', // Usually your GitHub org/user name.
  projectName: 'ProJava', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'bagu',
          path: './docs-bagu',
          routeBasePath: 'bagu',
          sidebarPath: './sidebarsDefault.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //     // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'scene',
        path: 'docs-scene',
        routeBasePath: 'scene',
        sidebarPath: './sidebarsScene.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resource',
        path: 'docs-resource',
        routeBasePath: 'resource',
        sidebarPath: './sidebarsResource.js',
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leetcode',
        path: 'docs-leetcode',
        routeBasePath: 'leetcode',
        sidebarPath: './sidebarsLeetcode.js',
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/projava.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'proJava',
        logo: {
          alt: 'proJava Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'default',
            position: 'left',
            label: '八股',
          },

          {
            href: 'https://github.com/drowning-in-codes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '开始阅读',
            items: [
              {
                label: '文档',
                to: '/docs-bagu/intro',
              },
            ],
          },
          {
            title: '关注我',
            items: [
              {
                label: 'Blog',
                href: 'https://https://sekyoro.top/',
              },
              {
                label: 'Website',
                href: 'https://proanimer.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/drowning-in-codes',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProJava, Inc. Built with Heart♥.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
