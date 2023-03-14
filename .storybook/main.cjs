const { mergeConfig } = require("vite");
const svgr = require("vite-plugin-svgr");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["../src/assets"],
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, { plugins: [svgr()] });
  },
};
