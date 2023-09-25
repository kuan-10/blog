<template>
    <div>
  <Fish></Fish>
    </div>
</template>

<script setup lang="ts">
import { ref} from "vue";
const a=ref<string>("hello")
console.log(a.value)
</script>

<style scoped>

</style>