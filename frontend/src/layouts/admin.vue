<template>
  <div>
    <navigationAdmin/>
      <slot />
  </div>
</template>

<script>
import navigationAdmin from "@/components/adminPage/navigationAdmin";
export default {
  components:{
     navigationAdmin
  }
    
}
</script>

<style>

</style>