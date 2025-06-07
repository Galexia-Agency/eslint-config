# Eslint Config

A base eslint config for use across Galexia's projects

## Install

Create a `.npmrc` file in your project and add the registry for the `@galexia-agency` scope:

```bash
echo @galexia-agency:registry=https://npm.pkg.github.com >> .npmrc
```

Then install the package from GitHub Packages:

```bash
pnpm install eslint @galexia-agency/eslint-config-galexia --save-dev
```

### Scripts

package.json

```json
"scripts": {
    "lint:scripts": "eslint --ext .js,.vue .",
    "fix:scripts": "eslint --ext .js,.vue . --fix"
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
    "@galexia-agency/eslint-config-galexia",
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
