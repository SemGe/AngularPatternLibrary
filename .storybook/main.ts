import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true
  }
};

export default config;
