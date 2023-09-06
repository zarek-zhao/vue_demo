<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  username: String,
  password: String
})

const count = ref(0)


</script>

<template>
this is  a login page
  <p>{{ username }}</p>
  <p>{{ password }}</p>

  <p>author: zhaoruihang </p>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
