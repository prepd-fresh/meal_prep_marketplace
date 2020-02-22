<template>
  <div>
    <b-jumbotron class = "banner">
        <template v-slot:header>
          <b-img :src="image.logo" fluid alt="Responsive image" class="logo"></b-img>
        </template>
    
      <b-button class="button" variant="primary" href="https://prepdfresh.com/">Preped Fresh</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: {
        logo: require("../../assets/images/logo.png")
      }
    };
  }
};
</script>

<style>
.logo {
    width: 50%;
    filter: brightness(100%)!important;
}
.banner {
  background-image: url("../../assets/images/banner3.jpg");
  background-size: cover;
  filter:brightness(100%);
}
.button{
    background-color: #f8951d !important;
    border: none !important;
    margin-left: 35px
    
}
.button:hover{
  background-color:#F8B21D !important;

}
@media only screen and (max-width: 600px) {
  .logo{
    margin-top:40px;
  }
  .button{
    margin-left:10px
  }
}

</style>