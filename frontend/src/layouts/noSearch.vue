<template lang="html">
  <div>

      <navigationNoSearch/>
      
      <div class="background">
        <slot class="slot" />
      </div>
     
     
    
  </div>
</template>

<script>
import navigationNoSearch from "@/components/loginPage/navigationNoSearch";

export default {
    components:{
        navigationNoSearch,
       
    }
}
</script>
<style lang="css" scoped>
    .background{
        padding-top: 10px;
        background-image: url("../assets/images/banner2.jpg");
        padding-bottom: 10%;
        background-size: cover;
        position: relative;
    }
@media only screen and (max-width: 600px) {
  .background{
    padding-bottom: 60%;
  }
}
</style>