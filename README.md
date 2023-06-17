<a href="https://npmjs.com/package/@vituum/vite-plugin-tailwind"><img src="https://img.shields.io/npm/v/@vituum/vite-plugin-tailwind.svg" alt="npm package"></a>
<a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/@vituum/vite-plugin-tailwind.svg" alt="node compatility"></a>

# ⚡️🎨 ViteTailwind
Adds out of the box support for TailwindCSS with following PostCSS plugins:
* [`postcss-import`](https://www.npmjs.com/package/postcss-import)
* [`postcss-nesting`](https://www.npmjs.com/package/postcss-nesting)
* [`postcss-custom-media`](https://www.npmjs.com/package/postcss-custom-media)
* [`autoprefixer`](https://www.npmjs.com/package/autoprefixer)

## Basic usage

```js
import postcss from '@vituum/vite-plugin-tailwind'

export default {
  plugins: [
    tailwind()
  ]
}
```

* If you want to add more PostCSS plugins, use add the via [css.postcss.plugins](https://vitejs.dev/config/shared-options.html#css-postcss).
* If you want to use `postcss.config.cjs` add `css.postcss: process.cwd()`, PostCSS config and it's plugins will be used instead

Read the [docs](https://vituum.dev/config/plugins-options.html#vituum-postcss) to learn more about plugin options

### Requirements

- [Node.js LTS (18.x)](https://nodejs.org/en/download/)
- [Vite](https://vitejs.dev/)
