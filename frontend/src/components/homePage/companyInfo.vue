<template>
  <div>
    <h2 class="dn-600">{{this.companyCurrentName}}</h2>
    
    <b-tabs content-class="mt-4" class="tab">
      <b-tab title="General information">
        <paymentOptions :paymentInfo ="paymentInfo" />
      </b-tab>
      <b-tab title="Menu Options" >
        <companyMenu :companyMenuOptions ="companyMenuOptions" />
      </b-tab>
      <b-tab title="Reviews">
        <review :companyCurrentName ="companyCurrentName"/>
      </b-tab>
      <b-tab title="location">
        <companyLocation :companyLocationOptions ="companyLocationOptions"/>
      </b-tab>
    </b-tabs>
    
  </div>
  
</template>

<script>
import paymentOptions from "./companyComponents/paymentOptions"
import companyLocation from "./companyComponents/companyLocation"
import companyMenu from "./companyComponents/menu"
import review from "./companyComponents/review"


export default {
  data() {
    return {
        info: this.companyInformation, 
        companyCurrentName:  this.companyInformation.name,
        //spliting all the data into sub groups and passing it down the component tree
        paymentInfo:{
          description: this.companyInformation.description,
          paymentOptions:  this.companyInformation.paymentOptions,
          priceRange:  this.companyInformation.priceRange,
          deliveryDays: this.companyInformation.deliveryDays
        },
        companyMenuOptions:{
           bulkDiscount: this.companyInformation.bulkDiscount,
           menuChangesOption: this.companyInformation.menuChanges,
           vegetarianOption: this.companyInformation.vegetarian,
           extraProtienOption: this.companyInformation.extraProtien,
           veganOption: this.companyInformation.vegan,
           mealOptions:this.companyInformation.mealOptions,
           numberOfMeals: this.companyInformation.numberOfMeals   
        },
         companyLocationOptions:{
          deliveryOptions: this.companyInformation.deliveryLocations,
          instagramFollowers: this.companyInformation.instagramFollowers
        }
    };
  },
  components: {
    paymentOptions,
    companyLocation,
    companyMenu,
    review
  },
  props: ['companyInformation'],

};
</script>

<style>
.nav-link {
  color: black;
  font-size: 15px;
}
.nav-link:hover {
  color: #f8951d !important;
}
.tab{
  width:100% !important;
  margin-right: -100px !important;
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

  .dn-600 {
    display: none;
  }
}
</style>