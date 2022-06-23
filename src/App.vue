<template>
  <PureDescriptions
    v-loading="loading"
    title="Customized style list"
    align="left"
    :column="3"
    border
    :data="data"
    :columns="columns"
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
import { PureDescriptions } from "../packages";
// import { PureDescriptions } from "../dist/index.es";
const { columns } = useColumns();

const loading = ref(true);
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
  loading.value = false;
}, 400);

function onRefresh() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
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
