<template>
  <div>
    <h1>Menu FQA</h1>
  <div>{{this.menuOptions}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuOptions: this.companyMenuOptions
    }
  },
  props:['companyMenuOptions']
};
</script>

<style>
</style>