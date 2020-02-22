<template>
 <div >
  <b-navbar class="navBar" toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand class="navBand" href="/"> <b-img :src="images.logoSmall" class="logoSmall"></b-img></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" fixed="top"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"  class="navBand">Login</b-nav-item>
        <b-nav-item href="#"  class="navBand">Register</b-nav-item>
        <b-nav-item href="/about"  class="navBand">About</b-nav-item>    
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          <b-button size="sm" class="my-3 my-sm-0">Advanced Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
     data(){
        return {
          images:{
            logoSmall:require("../../assets/images/small-logo.png")
          }
        }
    },
};
</script>

<style>
.bg-info{
  background-color: white !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.navBand{
  color: black !important;


}
.navbar-dark .navbar-nav .nav-link{
   color: black !important;
  
}
.navbar-toggler-icon{ 
    filter:brightness(0%);
}
.logoSmall{
  width:200px;

}
.logoSmall:hover{
    filter:brightness(80%);
}
.my-2{
  background-color:#f8951d !important;
  border: none !important;
}
.my-3{
  background-color:#f8951d !important;
  border: none !important;
  margin-left:10px;
}
.my-2:hover{
  background-color:#F8B21D !important;
}
.my-3:hover{
  background-color:#F8B21D !important;
}

</style>