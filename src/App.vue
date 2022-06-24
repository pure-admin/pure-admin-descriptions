<template>
  <PureDescriptions
    title="Customized style list"
    align="left"
    :column="3"
    border
    :data="data"
    :columns="columns"
    :loading="loading"
  >
    <template #extra>
      <el-button type="primary" @click="onRefresh">Refresh</el-button>
    </template>
    <template #title>
      <a
        href="https://github.com/xiaoxian521/pure-admin-descriptions"
        target="_blank"
      >
        @pureadmin/descriptions
      </a>
    </template>
    <template #skill="{ value }">
      <el-tag size="small">{{ value }}</el-tag>
    </template>
  </PureDescriptions>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";
import { type Loading } from "..";
import { PureDescriptions } from "../packages";
// import { PureDescriptions } from "../dist/index.es";
const { columns } = useColumns();

const svg = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  "
  style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`;

const loading = ref<Loading>({
  load: true,
  svgViewBox: "-10, -10, 50, 50",
  svg
});
const data = ref<any>();

setTimeout(() => {
  data.value = [
    {
      name: "Tom",
      phone: "18100000000",
      place: "ShangHai",
      marks: "Office",
      skill: "eat、work、sleep"
    }
  ];
  loading.value.load = false;
}, 400);

function onRefresh() {
  loading.value.load = true;
  setTimeout(() => {
    loading.value.load = false;
  }, 400);
}
</script>

<style>
.my-label {
  background: var(--el-color-success-light-9) !important;
}
.my-content {
  background: var(--el-color-danger-light-9);
}
</style>
