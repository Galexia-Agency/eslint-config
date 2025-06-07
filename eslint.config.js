import typescriptParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'

export default [
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly'
      },
      parser: typescriptParser
    },
    plugins: {
      vue
    },
    rules: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'prefer-template': 'error',
      'vue/prefer-template': 'error',
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/comment-directive': 'off',
      'vue/no-v-html': 'off',
      'vue/component-tags-order': ['error', { order: ['style', 'template', 'script'] }],
      quotes: ['error', 'single'],
      'arrow-parens': ['error', 'always'],
      semi: ['error', 'never'],
      'import/no-named-as-default': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  }
]
