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
    {
      type: 'doc',
      id: 'nasalAirway/index',
    },
    {
      type: 'doc',
      id: 'chestSeal/index',
    },
    {
      type: 'doc',
      id: 'decompressionNeedle/index',
    },
    {
      type: 'doc',
      id: 'burnDressingCravat/index',
    },
    {
      type: 'doc',
      id: 'bandAid/index',
    },
    {
      type: 'doc',
      id: 'scissors/index',
    },
    {
      type: 'doc',
      id: 'permanentMarker/index',
    },
    {
      type: 'doc',
      id: 'gloves/index',
    },
    {
      type: 'doc',
      id: 'chemLightSource/index',
    },
    {
      type: 'doc',
      id: 'medicalCard/index',
    },
  ],
};

module.exports = sidebars;
