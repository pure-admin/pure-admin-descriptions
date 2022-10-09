## 按需导入示例

需要注意的是，[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 实现自动引入 `element-plus` 的方式，在结合 [@pureadmin/descriptions](https://github.com/xiaoxian521/pure-admin-descriptions) 使用时，需要手动引入 `ElDescriptions` 样式，代码如下

```ts
// main.ts
import "element-plus/es/components/descriptions/style/css";
import "element-plus/es/components/descriptions-item/style/css";
```

`@pureadmin/descriptions` 内置 `element-plus` 的 `Loading` 动画，按需引入时还需要加上下面这些代码

```ts
// main.ts
import "element-plus/es/components/loading/style/css";

import { vLoading } from "element-plus";

app.directive("loading", vLoading);
```
