const path = require("path");

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Plexypay docs",
  url: "https://plexypay.github.io",
  baseUrl: "/docs-portal/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "plexypay", // Usually your GitHub org/user name.
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
          routeBasePath: "/",
          sidebarCollapsed: false,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/plexypay/docs-portal/blob/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   "docusaurus-plugin-module-alias",
    //   {
    //     alias: {
    //       "@components": path.resolve(__dirname, "./src/components"),
    //     },
    //   },
    // ],
    "docusaurus-plugin-sass",
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
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        // title: "Plexypay docs",
        logo: {
          alt: "Plexypay Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "home",
            position: "left",
            label: "Docs",
          },
          {
            label: "Dashboard",
            position: "right",
            href: "https://dashboard.plexypay.com/",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} PlexyPay.`,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
