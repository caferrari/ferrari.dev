import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { ignores, configs } = require('@eduzz/eslint-config/react');

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs,
  {
    ignores: ignores('eslint.config.js', '.prettierrc.cjs')
  }
];
