<template>
  <div>
    <h1>Location</h1>
    <h4>All Delivery locations</h4>
    <ul v-for="(location, index) in deliveryLocations.deliveryOptions" v-bind:key="index.id">
      <li>{{location}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      deliveryLocations: this.companyLocationOptions,
    }
  },
  props: ['companyLocationOptions'],
};
</script>

<style>
</style>