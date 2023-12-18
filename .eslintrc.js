module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    '@nuxtjs/eslint-config',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'prefer-template': 'error',
    'vue/prefer-template': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/comment-directive': 0,
    'vue/no-v-html': 0,
    'vue/component-tags-order': [
      'error',
      {
        order: ['style', 'template', 'script']
      }
    ],
    quotes: [
      'error',
      'single'
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    semi: [
      'error',
      'never'
    ],
    'import/no-named-as-default': 'off',
    'vue/multi-word-component-names': 0
  }
}
