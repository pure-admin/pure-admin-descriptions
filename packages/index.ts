export type {
  DescriptionsAlign,
  DescriptionsColumns,
  PureDescriptionsProps
} from "./types";

import type { App } from "vue";
import Descriptions from "./components/descriptions";

export const PureDescriptions = Object.assign(Descriptions, {
  install: function (app: App) {
    app.component(Descriptions.name, Descriptions);
  }
});

export default PureDescriptions;
