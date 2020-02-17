<template>
    <div>
      <navigation/>
      <slot/>
    </div>
</template>

<script>
import navigation from "@/components/homePage/homeNavigation"
export default {
    components:{
        navigation
    }
}
</script>

<style>

</style>