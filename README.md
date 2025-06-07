# Eslint Config

A base eslint config for use across Galexia's projects

## Install

```bash
pnpm add -D eslint @galexia-agency/eslint-config-galexia
```

### Add the GitHub registry

Create or update a `.npmrc` file and include:

```ini
@galexia-agency:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<GITHUB_TOKEN>
```

Replace `<GITHUB_TOKEN>` with a [personal access token](https://github.com/settings/tokens) that has `read:packages` permissions.

### Scripts

package.json

```json
"scripts": {
    "lint:scripts": "eslint .",
    "fix:scripts": "eslint . --fix"
}
```

### Configuration

.eslint.config.js

```js
import galexiaConfig from '@galexia-agency/eslint-config-galexia'

export default galexiaConfig

```

### Configuring with Nuxt 3

nuxt.config.ts

```ts
...
import eslint from '@nuxt/eslint-plugin'

modules: [
  eslint,
]
...
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
