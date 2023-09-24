/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Аптечка IFAK', // sidebar label
    },
    {
      type: 'category',
      label: 'Турнікет',
      link: {
        type: 'doc',
        id: 'tourniquet/index',
      },
      items: [
        'tourniquet/CAT7',
        'tourniquet/SICH',
      ],
    },
    {
      type: 'category',
      label: 'Бандаж',
      link: {
        type: 'doc',
        id: 'bandage/index',
      },
      items: [
        'bandage/SICH',
      ],
    },
    {
      type: 'doc',
      id: 'hemostaticBandage/index',
    },
    {
      type: 'doc',
      id: 'tamponadeBandage/index',
    },
    // {
    //   type: 'category',
    //   label: 'Docusaurus',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'doc2',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'doc3',
    //     },
    //   ],
    // },
    // {
    //   type: 'link',
    //   label: 'Learn more',
    //   href: 'https://example.com',
    // },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
