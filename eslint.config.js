import parser from '@typescript-eslint/parser'
import { createConfigForNuxt } from '@nuxt/eslint-config'
import stylistic from '@stylistic/eslint-plugin'

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
      files: ['**/*.{js,ts}'],
      languageOptions: {
        parser,
        parserOptions: {
          sourceType: 'module'
        }
      },
      plugins: {
        '@stylistic/js': stylistic
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
        ],
        '@stylistic/js/quote-props': ['error', 'as-needed'],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'return' }
        ]
      }
    }
  )
