<template lang="html">
  <div>
      <navigationloggedIn/>
      
      <slot/>
  </div>
</template>

<script>
import navigationloggedIn from "@/components/loggedInComponents/loggedInNavigation";

export default {
    components:{
     navigationloggedIn
    },
    data(){
      return{
        form:'test'
      }
    },

}
</script>
<style lang="css" scoped>
</style>