# Shareable Prettier config

### Quick start

```bash
$ yarn add -D @rokinsky/prettier-config
```

or

```bash
$ npm install @rokinsky/prettier-config -D
```

Add to your `package.json`:

```json
{
    "name": "app",
    "version": "1.33.7",
    "prettier": "@rokinsky/prettier-config"
}
```

or `.prettierrc.js`:

```js
module.exports = {
    ...require('@rokinsky/prettier-config'),
    // override
    semi: false
};
```
