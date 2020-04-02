<template>
  <div>
      <h4>Payment Options</h4>
      <div class="d-flex">
        <span class="badge badge-primary mr-2 text-capitalize" v-for="(n, i) in this.paymentInfo.paymentOptions" :key="i">{{n}}</span>
      </div>
      <h4 class="mt-4">Prices</h4>
      <div class="d-flex">
        <span class="badge badge-secondary mr-2 text-capitalize">{{this.paymentInfo.priceRange.lowest}}</span>
        
        <span class="badge badge-info mr-2 text-capitalize">{{this.paymentInfo.priceRange.highest}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      payments : this.paymentInfo
    }
  },
  props:['paymentInfo'],
  created: function() {
    console.log(this.paymentInfo);
  }


};
</script>

<style>
</style>