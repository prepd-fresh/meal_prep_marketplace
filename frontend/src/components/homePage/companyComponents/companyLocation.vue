<template>
  <div>
    <h1>Location</h1>
    <div>{{this.t}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      t: this.companyLocationOptions,
    }
  },
  props: ['companyLocationOptions'],
};
</script>

<style>
</style>