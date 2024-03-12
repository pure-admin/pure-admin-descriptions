import type {
  IDescriptionsInject,
  IDescriptionsItemInject
} from "element-plus/es/components/descriptions/src/descriptions.type";

export type DescriptionsAlign = "left" | "center" | "right";

/**
 * @see {@link https://element-plus.org/en-US/component/descriptions.html#descriptions-item-attributes}
 */
export interface DescriptionsColumns extends IDescriptionsItemInject {
  prop?: string;
  /** If filled, prop is invalid and data is no longer read from data */
  value?: string | number;
  hide?: CallableFunction;
  slot?: Readonly<{
    [name: string]: import("vue").Slot | undefined;
  }>;
  copy?: boolean;
  labelRenderer?: import("vue").FunctionalComponent | Function;
  cellRenderer?: import("vue").FunctionalComponent | Function;
}

/**
 * @see {@link https://element-plus.org/en-US/component/loading.html#directives}
 */
export interface Loading {
  load?: boolean;
  text?: string;
  svg?: string | import("vue").FunctionalComponent | Function;
  spinner?: string;
  svgViewBox?: string;
  background?: string;
}

export interface PureDescriptionsProps extends IDescriptionsInject {
  data: Array<any>;
  columns: Array<DescriptionsColumns>;
  loading?: Loading;
  align?: DescriptionsAlign;
  labelAlign?: DescriptionsAlign;
}
