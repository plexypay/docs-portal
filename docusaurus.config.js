// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Foropay docs",
  url: "https://foropay.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "foropay", // Usually your GitHub org/user name.
  projectName: "docs-portal", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // lastVersion: "current",
          // onlyIncludeVersions: ["current"],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/foropay/docs-portal/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/foropay/docs-portal/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api-reference",
        path: "api-reference",
        routeBasePath: "api-reference",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "Foropay docs",
        logo: {
          alt: "Foropay Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "getting_started/introduction",
            position: "left",
            label: "Docs",
          },
          {
            to: "/api-reference/webhooks",
            label: "API reference",
            position: "left",
            activeBaseRegex: `/api-reference/`,
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Product",
            items: [],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Docs",
                href: "#",
              },
              {
                label: "API reference",
                href: "#",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About us",
                href: "#",
              },
              {
                label: "Contact",
                href: "#",
              },

              {
                label: "Terms",
                href: "#",
              },

              {
                label: "Privacy",
                href: "#",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Foropay.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
