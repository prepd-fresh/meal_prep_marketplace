<template>
  <div>
   <banner/>
    <ul v-for="n in 10" v-bind:key="n">
      <company :idNumber="n"/>
    </ul>
  </div>
</template>

<script>
import company from "./company.vue";
import banner from "./homeBanner"
export default {
  data() {
    return {};
  },
  components: {
    company,
    banner
  }
};
</script>

<style>
</style>