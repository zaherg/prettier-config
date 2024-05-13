## Prettier Config

This is my personal prettier configuration that I use most of the time, feel free to use it or create your own based on it.

### Usage

#### Via package.json

To use it:

1. Install the package `npm install @zaher/prettier-cofig --save-dev`
2. Update your `package.json` file, and add the following to it:

```json
{
	// ...
	"prettier": "@zaher/prettier-config"
}
```

#### Extending the config

If you want to update any of the config while keeping the other one you can create your own `.prettierrc.js` file and require this package within it, then update the one you want to change, like

```javascript
module.exports = {
	...require('@zaher/prettier-config'),
	// Override values here
};
```

This way your local file will be picked up automatically, while also using the other values from the package (where the local file imports and spreads the config from the package) .

This package is released under the [MIT licnese](./LICENSE)
