<script setup lang="ts">
import { useRoute } from "vue-router";

const route=useRoute()
</script>

<template>
  <div>
    <Header v-show="route.path!='/404'"></Header>
   <router-view v-slot="{Component}">
  <component :is="Component"></component>
  </router-view>
  <Waves></Waves>
  </div>
  
</template>

<style scoped>

</style>
