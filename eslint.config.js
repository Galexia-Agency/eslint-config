import parser from '@typescript-eslint/parser'
import { createConfigForNuxt } from '@nuxt/eslint-config'

export default await createConfigForNuxt()
  .override('nuxt/vue/rules', {
    rules: {
      'vue/prefer-template': 'error',
      'vue/comment-directive': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/block-order': ['error', {
        order: ['style', 'template', 'script']
      }],
    }
  })
  .override('nuxt/javascript', {
    rules: {
      'no-console': 'error',
      'camelcase': ['error', { properties: 'always' }],
      'prefer-template': 'error',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'import/no-named-as-default': 'off',
    }
  })
  .append(
    {
      ignores: ['eslint.config.js'],
      files: ['**/*.{js,ts}'],
      languageOptions: {
        parser,
        parserOptions: {
          sourceType: 'module'
        }
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          // Class, interface, type alias, enum, etc.
          {
            selector: 'typeLike',
            format: ['PascalCase']
          },
          // Type/interface/class properties
          {
            selector: 'typeProperty',
            format: ['camelCase']
          }
        ]
      }
    }
  )
