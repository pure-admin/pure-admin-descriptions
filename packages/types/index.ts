import type {
  IDescriptionsInject,
  IDescriptionsItemInject
} from "element-plus/es/components/descriptions/src/descriptions.type";

export type DescriptionsAlign = "left" | "center" | "right";
export interface DescriptionsColumns extends IDescriptionsItemInject {
  prop?: string;
  /** If filled, prop is invalid and data is no longer read from data */
  value?: string | number;
  hide?: CallableFunction;
  slot?: Readonly<{
    [name: string]: import("vue").Slot | undefined;
  }>;
  labelRenderer?: import("vue").FunctionalComponent | Function;
  cellRenderer?: import("vue").FunctionalComponent | Function;
}

export interface PureDescriptionsProps extends IDescriptionsInject {
  data: Array<any>;
  columns: Array<DescriptionsColumns>;
  align?: DescriptionsAlign;
  labelAlign?: DescriptionsAlign;
}
