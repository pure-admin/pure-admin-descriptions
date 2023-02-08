<h1 align="center">@pureadmin/descriptions</h1>
<p align="center">二次封装element-plus的Descriptions，提供灵活的配置项</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/descriptions" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/descriptions?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/descriptions" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/descriptions?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.en-US.md)

- [预览地址](https://pure-admin.github.io/pure-admin-descriptions)

## 🤔 开发初衷

- `element-plus` [Descriptions](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-item-%E5%B1%9E%E6%80%A7) 的`Descriptions Item`属性目前只能写在`<template></template>`模版里，这样不是很灵活，如果描述列表的`Item`足够多，代码写、看起来很臃肿，于是我开发了这个库，让我们一起探索吧

## 🚀 特性

- 🦾 **灵活度高**: 使用`tsx`语法编写，保证类型的同时，给开发者提供了更灵活的写法，给使用者提供了更方便的配置
- ⚡ **完全可摇树**: 自带 Tree-shaking，只对引入的代码进行打包
- 🫶 **代码零侵入**: 保持`element-plus` [Descriptions](https://element-plus.org/zh-CN/component/descriptions.html) 所有属性、插槽的同时，提供更灵活的配置
- ⚓ **代码提交前校验**: 使用 [husky](https://typicode.github.io/husky/#/) 对提交代码前进行规则校验，强制规范开发流程，防止开发失误

## 📦 安装

```bash
npm install @pureadmin/descriptions
or
pnpm add @pureadmin/descriptions
```

## 🦄 用法

### 局部注册（单文件）

```ts
import { PureDescriptions } from "@pureadmin/descriptions";

<pure-descriptions :data="data" :columns="columns"></pure-descriptions>
```

### 全局注册（main.ts）

```ts
import { createApp } from "vue";
import App from "./App.vue";

import PureDescriptions from "@pureadmin/descriptions";

const app = createApp(App);

app.use(PureDescriptions).mount("#app");
```

[点击查看具体用法](https://github.com/pure-admin/pure-admin-descriptions/blob/main/src/App.vue)

## Volar 支持

- 如果您在使用 `Volar`，那么可以在 tsconfig.json 中配置 compilerOptions.types 来指定全局组件类型（尤其是全局注册时要想获得类型提示就需要加上下面配置）

```js
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@pureadmin/descriptions/volar"]
  }
}
```

## 许可证

[MIT © xiaoxian521-latest](./LICENSE)
