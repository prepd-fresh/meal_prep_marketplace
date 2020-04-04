<template lang="html">
  <div>
      <h1>test</h1>
      <navigationloggedIn/>
      <slot />
  </div>
</template>

<script>
import navigationloggedIn from "@/components/loggedInComponents/loggedInNavigation";

export default {
    components:{
     navigationloggedIn
    }
}
</script>
<style lang="css" scoped>
</style>