# Eslint Config

A base eslint config for use across Galexia's projects

## Install

```bash
yarn add eslint eslint-config-galexia@https://github.com/Galexia-Agency/eslint-config --dev
```

.eslintrc

```json
{
  "extends": [
   "galexia"
  ]
}
```

### Scripts

package.json

```json
"scripts": {
    "lint:scripts": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "fix:scripts": "eslint --ext .js,.vue --ignore-path .gitignore . --fix"
}
```

### Configuring with Nuxt 2

```bash
yarn add @nuxtjs/eslint-module eslint --dev
```

nuxt.config.js

```js
...
modules: [
    '@nuxtjs/eslint-module',
]
...
```

.eslintrc

```json
{
  "env": {
    "node": true
  },
  "extends": [
   "galexia"
  ]
}
```

### Configuring with Nuxt 3

```bash
yarn add @nuxtjs/eslint-module @nuxtjs/eslint-config-typescript @typescript-eslint/parser eslint --dev
```

nuxt.config.ts

```ts
...
modules: [
    '@nuxtjs/eslint-module',
]
...
```

.eslintrc

```json
{
  "env": {
    "node": true
  },
  "extends": [
    "galexia",
    "@nuxtjs/eslint-config-typescript"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  }
}
```
