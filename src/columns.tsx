import { ref } from "vue";

export function useColumns() {
  const columns = ref([
    {
      label: "Username",
      prop: "name",
      width: 180,
      hide: () => false
    },
    {
      prop: "phone",
      labelRenderer: data => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <el-icon>
            <iphone />
          </el-icon>
          <span style={{ color: "rgb(122, 114, 255)", marginLeft: "2px" }}>
            Telephone
          </span>
        </div>
      )
    },
    {
      label: "Place",
      prop: "place",
      labelClassName: "my-label",
      className: "my-content"
    },
    {
      label: "Remarks",
      prop: "marks",
      cellRenderer: ({ value }) => {
        return <el-tag size="small">{value}</el-tag>;
      }
    },
    {
      label: "Skill",
      prop: "skill",
      slot: "skill"
    },
    {
      label: "Hobby",
      value: "girl",
      labelAlign: "left",
      align: "center",
      labelColor: "red",
      color: "green"
    }
  ]);

  return {
    columns
  };
}
