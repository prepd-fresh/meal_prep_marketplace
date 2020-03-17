<template>
  <div>
      <b-tabs content-class="mt-3">
        <b-tab title="User List" active><userList/></b-tab>
        <b-tab title="Company List"><companyList/></b-tab>
        <b-tab title="comments"><p>will show comments here</p></b-tab>
      </b-tabs>
  </div>
</template>

<script>
import userList from "./userList"
import companyList from "./companyList"
export default {
    components:{
        userList,
        companyList
    }
}
</script>

<style>

</style>