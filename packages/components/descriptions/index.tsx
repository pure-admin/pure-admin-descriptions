import props from "./props";
import Renderer from "../renderer";
import { isFunction } from "../helper";
import { PureDescriptionsProps } from "../../types";
import { defineComponent, toRefs, unref } from "vue";
import { ElDescriptions, ElDescriptionsItem } from "element-plus";

export default defineComponent({
  name: "PureDescriptions",
  props,
  setup(props, { slots, attrs }) {
    const { data, columns, align, labelAlign, loading } = toRefs(
      props
    ) as unknown as PureDescriptionsProps;

    const titleSlot = {
      title: () => slots?.title && slots.title({ props, attrs })
    };
    const extraSlot = {
      extra: () => slots?.extra && slots.extra({ props, attrs })
    };

    const descriptionsSlot =
      slots?.title && !slots?.extra
        ? titleSlot
        : slots?.extra && !slots?.title
        ? extraSlot
        : slots?.title && slots?.extra
        ? Object.assign(titleSlot, extraSlot)
        : null;

    return () => (
      <ElDescriptions
        {...props}
        {...attrs}
        v-slots={descriptionsSlot}
        v-loading={unref(loading).load}
        element-loading-text={unref(loading).text ?? "Loading..."}
        element-loading-svg={unref(loading).svg}
        element-loading-spinner={unref(loading).spinner}
        element-loading-svg-view-box={unref(loading).svgViewBox}
        element-loading-background={unref(loading).background}
      >
        {unref(columns).map((column, index) => {
          let value = unref(data).map(v => v[column?.prop]);
          const defaultSlots = {
            default: () => {
              if (column?.cellRenderer) {
                return (
                  <Renderer
                    render={column.cellRenderer}
                    params={{
                      props,
                      attrs,
                      index,
                      value: value[0]
                    }}
                  ></Renderer>
                );
              } else if (column?.slot) {
                return slots?.[column.slot as any]?.({
                  props,
                  attrs,
                  index,
                  value: value[0]
                });
              } else {
                return column?.value ? (
                  <>{unref(column.value)}</>
                ) : (
                  <>{value}</>
                );
              }
            }
          };
          const scopedSlots = column?.labelRenderer
            ? {
                label: () => {
                  return (
                    <Renderer
                      render={column.labelRenderer}
                      params={{
                        props,
                        attrs,
                        index,
                        value: value[0]
                      }}
                    ></Renderer>
                  );
                },
                ...defaultSlots
              }
            : defaultSlots;
          if (isFunction(column?.hide) && column?.hide(attrs)) {
            return column?.hide(attrs);
          }
          return (
            <ElDescriptionsItem
              {...column}
              key={index}
              align={column.align ? column.align : unref(align)}
              labelAlign={
                column.labelAlign ? column.labelAlign : unref(labelAlign)
              }
            >
              {scopedSlots}
            </ElDescriptionsItem>
          );
        })}
      </ElDescriptions>
    );
  }
});
