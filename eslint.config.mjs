import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt (
  antfu({
    ...oxlint.configs['flat/recommended'],
  }),
).overrideRules({
  'no-console': 'off',
  'ts/no-use-before-define': 'off',
  'ts/consistent-type-definitions': 'off',
  'node/prefer-global/process': 'off',
  'import/first': 'off',
  'import/order': 'off',
})
