/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require( 'prism-react-renderer/themes/github' );
const darkCodeTheme = require( 'prism-react-renderer/themes/dracula' );

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Medical',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'uk',
    locales: [ 'uk' ],
  },

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       path: './src/docs',
  //       breadcrumbs: true,
  //       routeBasePath: 'docs',
  //       sidebarPath: 'sidebars.js',
  //     //   // Simple use-case: string editUrl
  //     //   // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
  //     //   // Advanced use-case: functional editUrl
  //     //   editUrl: ({versionDocsDirPath, docPath}) =>
  //     //     `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`,
  //     //   editLocalizedFiles: false,
  //     //   editCurrentVersion: false,
  //     //   include: ['**/*.md', '**/*.mdx'],
  //     //   exclude: [
  //     //     '**/_*.{js,jsx,ts,tsx,md,mdx}',
  //     //     '**/_*/**',
  //     //     '**/*.test.{js,jsx,ts,tsx}',
  //     //     '**/__tests__/**',
  //     //   ],
  //     //   async sidebarItemsGenerator({
  //     //     defaultSidebarItemsGenerator,
  //     //     numberPrefixParser,
  //     //     item,
  //     //     version,
  //     //     docs,
  //     //     isCategoryIndex,
  //     //   }) {
  //     //     // Use the provided data to generate a custom sidebar slice
  //     //     return [
  //     //       {type: 'doc', id: 'intro'},
  //     //       {
  //     //         type: 'category',
  //     //         label: 'Tutorials',
  //     //         items: [
  //     //           {type: 'doc', id: 'tutorial1'},
  //     //           {type: 'doc', id: 'tutorial2'},
  //     //         ],
  //     //       },
  //     //     ];
  //     //   },
  //     //   numberPrefixParser(filename) {
  //     //     // Implement your own logic to extract a potential number prefix
  //     //     const numberPrefix = findNumberPrefix(filename);
  //     //     // Prefix found: return it with the cleaned filename
  //     //     if (numberPrefix) {
  //     //       return {
  //     //         numberPrefix,
  //     //         filename: filename.replace(prefix, ''),
  //     //       };
  //     //     }
  //     //     // No number prefix found
  //     //     return {numberPrefix: undefined, filename};
  //     //   },
  //     //   docLayoutComponent: '@theme/DocPage',
  //     //   docItemComponent: '@theme/DocItem',
  //     //   remarkPlugins: [require('remark-math')],
  //     //   rehypePlugins: [],
  //     //   beforeDefaultRemarkPlugins: [],
  //     //   beforeDefaultRehypePlugins: [],
  //     //   showLastUpdateAuthor: false,
  //     //   showLastUpdateTime: false,
  //     //   disableVersioning: false,
  //     //   includeCurrentVersion: true,
  //     //   lastVersion: undefined,
  //     //   versions: {
  //     //     current: {
  //     //       label: 'Android SDK v2.0.0 (WIP)',
  //     //       path: 'android-2.0.0',
  //     //       banner: 'none',
  //     //     },
  //     //     '1.0.0': {
  //     //       label: 'Android SDK v1.0.0',
  //     //       path: 'android-1.0.0',
  //     //       banner: 'unmaintained',
  //     //     },
  //     //   },
  //     //   onlyIncludeVersions: ['current', '1.0.0', '2.0.0'],
  //     },
  //   ],
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ( {
        docs: {
          sidebarPath: require.resolve( './sidebars.js' ),
          path: './src/docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        // blog: {
        //   showReadingTime: true,
        //   path: './src/blog',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve( './src/css/custom.css' ),
        },
      } ),
    ],
  ],

  themeConfig: (
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ( {
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Medical',
        logo: {
          alt: 'Medical Logo',
          src: 'img/medicalLogo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Аптечка',
            items: [
              {
                label: 'Турнікет',
                to: '/docs/intro',
              },
              {
                label: 'Оклюзійка',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   label: 'Tutorial',
          //   to: '/docs/intro',
          // },
          // {
          //   label: 'Tutorial',
          //   to: '/docs/intro',
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${ new Date().getFullYear() } My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    } )
  ),
};

module.exports = config;
