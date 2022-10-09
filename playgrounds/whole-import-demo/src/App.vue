<template>
  <PureDescriptions title="完整引入示例" :column="3" border :data="data" :columns="columns" :loading="loading" />
</template>

<script lang="ts" setup>
import { ref } from "vue"

const loading = ref({
  load: true,
})

const columns = [{
  label: "Name",
  prop: "name",
}, {
  label: "Phone",
  prop: "phone",
}, {
  label: "Place",
  prop: "place",
}]

const data = ref([
  {
    name: "小明",
    phone: "18100000000",
    place: "China",
  }
])

setTimeout(() => {
  loading.value.load = false
}, 1000)
</script>

