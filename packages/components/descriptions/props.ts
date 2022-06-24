import { ElDescriptions } from "element-plus";

export default {
  /** Descriptions data */
  data: {
    type: Array,
    default: []
  },
  /** Descriptions Item configuration items */
  columns: {
    type: Array,
    default: []
  },
  /** Descriptions Loading */
  loading: {
    type: Object,
    default: () => ({
      load: false,
      text: "Loading...",
      svg: "",
      spinner: "",
      svgViewBox: "",
      background: ""
    })
  },
  /** Integrate Descriptions Item with align property into Descriptions property */
  align: {
    type: String,
    default: "left"
  },
  /** Integrate Descriptions Item with label-align property into Descriptions property */
  labelAlign: {
    type: String,
    default: ""
  },
  ...ElDescriptions.props
};
