<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="price">
        <price />
      </b-tab>
      <b-tab title="menu">
       
      </b-tab>
      <b-tab title="website">

      </b-tab>
      <b-tab title="location">
        seomthing
       
      
      </b-tab>
    </b-tabs>
    
  </div>
  
</template>

<script>
import price from "./companyComponents/price"


export default {
  data() {
    return {};
  },
  components: {
    price
  }
};
</script>

<style>
.nav {
  margin-left: 20px;
}
.nav-link {
  color: black;
  font-size: 15px;
}
.nav-link:hover {
  color: #f8951d !important;
}
@media only screen and (max-width: 600px) {
  .nav {
    margin-left: -10px;
  }
  .nav-link {
    font-size: 11px;
  }
}
</style>