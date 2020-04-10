<template>
  <div>
    <b-row>
      <b-col>
    <h5>Location</h5>
    <h6>All Delivery locations</h6>
    <ul v-for="(location, index) in deliveryLocations.deliveryOptions" v-bind:key="index.id">
      <li>{{location}}</li>
    </ul>
    </b-col>
    <b-col>
    <b-img :src="images.Map" fluid alt="Responsive image" class="mapImage"></b-img>
    </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      deliveryLocations: this.companyLocationOptions,

       images: {
        Map: require("../../../assets/images/Map.png")
      }
    }
  },
  props: ['companyLocationOptions'],
};
</script>

<style>
.mapImage{
  width: 400px;
}
</style>