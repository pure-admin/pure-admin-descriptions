<h1 align="center">@pureadmin/descriptions</h1>
<p align="center">Secondary encapsulation of element-plus Descriptions, providing flexible configuration items</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/descriptions" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/descriptions?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/descriptions" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/descriptions?color=50a36f&label="></a>
</p>

English | [简体中文](./README.md)

- [Preview](https://pure-admin.github.io/pure-admin-descriptions)

## 🤔 Original intention of development

- `element-plus` [Descriptions](https://element-plus.org/en-US/component/descriptions.html#descriptions-item-attributes) `Descriptions Item` attribute can only be written in the `<template></template>` template at present, which is not very flexible. If there are enough `Item` describing the list, the code is written and looks bloated, so I developed this library, Let's explore together

## 🚀 Features

- 🦾 **High flexibility**: Written using `tsx` syntax, while ensuring the type, it provides developers with more flexible writing methods and provides users with more convenient configuration
- ⚡ **Fully tree-shaking**: Comes with Tree-shaking, only packages the imported code
- 🫶 **Code Zero Intrusion**: Keep all attributes and slots of `element-plus` [Descriptions](https://element-plus.org/en-US/component/descriptions.html) and provide more Flexible configuration
- ⚓ **Verification before code submission**: Use [husky](https://typicode.github.io/husky/#/) to verify the rules before submitting code, enforce standard development process and prevent development mistakes

## 📦 Install

```bash
npm install @pureadmin/descriptions
or
pnpm add @pureadmin/descriptions
```

## 🦄 Usage

### Partial registration (single file)

```ts
import { PureDescriptions } from "@pureadmin/descriptions";

<pure-descriptions :data="data" :columns="columns"></pure-descriptions>
```

### Global registration (main.ts)

```ts
import { createApp } from "vue";
import App from "./App.vue";

import PureDescriptions from "@pureadmin/descriptions";

const app = createApp(App);

app.use(PureDescriptions).mount("#app");
```

[Click to view the specific usage](https://github.com/pure-admin/pure-admin-descriptions/blob/main/src/App.vue)

## Volar support

- If you are using `Volar`, you can configure compilerOptions.types in tsconfig.json to specify the global component type (especially if you want to get type hints during global registration, you need to add the following configuration)

```js
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@pureadmin/descriptions/volar"]
  }
}
```

## License

[MIT © xiaoxian521-latest](./LICENSE)
