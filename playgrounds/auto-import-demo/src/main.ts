import { createApp } from "vue";
import App from "./App.vue";

// If you want to use ElDescriptions, import it.
import "element-plus/es/components/descriptions/style/css";
import "element-plus/es/components/descriptions-item/style/css";

import "element-plus/es/components/loading/style/css";

import { vLoading } from "element-plus";

import PureDescriptions from "@pureadmin/descriptions";

const app = createApp(App);
app.directive("loading", vLoading).use(PureDescriptions).mount("#app");
