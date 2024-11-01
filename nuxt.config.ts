// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:
  [
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
  ],
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
