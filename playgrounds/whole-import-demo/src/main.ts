import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import PureDescriptions from "@pureadmin/descriptions";

const app = createApp(App);
app.use(ElementPlus).use(PureDescriptions).mount("#app");
