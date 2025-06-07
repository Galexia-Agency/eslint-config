# Eslint Config

A base eslint config for use across Galexia's projects

## Install

```bash
pnpm install eslint eslint-config-galexia@https://github.com/Galexia-Agency/eslint-config --save-dev
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
pnpm install @nuxtjs/eslint-module eslint --save-dev
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
pnpm install @nuxtjs/eslint-module @nuxtjs/eslint-config-typescript @typescript-eslint/parser eslint --save-dev
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

### Configuring with VSCode

1. Install [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Add `vue` to `Probe` plugin settings.
3. Add the following to `.vscode/settings.json`

  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```
