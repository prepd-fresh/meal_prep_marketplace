<template>
  <div>
    <h1>prices</h1>
    <div>{{this.payments}}</div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      payments : this.paymentInfo
    }
  },
  props:['paymentInfo']
};
</script>

<style>
</style>