<template>
  <div>
    <h1>Home commponent</h1>
    <ul v-for="n in 10" v-bind:key="n">
      <company :data="n"/>
    </ul>
  </div>
</template>

<script>
import company from "./company.vue";
export default {
  data() {
    return {};
  },
  components: {
    company
  }
};
</script>

<style>
</style>