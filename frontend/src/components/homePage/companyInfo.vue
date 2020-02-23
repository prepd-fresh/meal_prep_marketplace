<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Payment Options">
        <paymentOptions />
      </b-tab>
      <b-tab title="Menu">
        <companyMenu/>
      </b-tab>
      <b-tab title="Comapny website">
        <h2>website link</h2>
      </b-tab>
      <b-tab title="location">
        <companyLocation/>
      </b-tab>
    </b-tabs>
    
  </div>
  
</template>

<script>
import paymentOptions from "./companyComponents/paymentOptions"
import companyLocation from "./companyComponents/companyLocation"
import companyMenu from "./companyComponents/menu"


export default {
  data() {
    return {};
  },
  components: {
    paymentOptions,
    companyLocation,
    companyMenu
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
  .nav-item{
    margin: -5px;
  }
}
</style>