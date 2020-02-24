<template>
  <div>
    <b-navbar class="navBar" toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand class="navBand" href="/">
        <b-img :src="images.logoSmall" class="logoSmall"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" fixed="top"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="navBand">Login</b-nav-item>
          <b-nav-item href="#" class="navBand">Register</b-nav-item>
          <b-nav-item href="/about" class="navBand">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            <b-button v-b-toggle.collapse-2 size="sm" class="my-3 my-sm-0">Advanced Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-collapse class="search" id="collapse-2">
   
      <b-card>
        <div class="searchList">
        <b-button class="searchButton"  squared variant="primary">Vegaterian</b-button>
        <b-button class="searchButton"  squared variant="primary">Vegen</b-button>
        <b-button class="searchButton"  squared variant="primary">Customisalbe</b-button>
        <b-button class="searchButton"  squared variant="primary">Discount avaliable</b-button>
        <b-button class="searchButton"  squared variant="primary">Diffrent Menu</b-button>
        <b-button class="searchButton"  squared variant="primary">Deliverly Charges</b-button>
        <b-button class="searchButton"  squared variant="primary">Extra Protien</b-button>
        <b-button class="searchButton"  squared variant="primary">Package option</b-button>
        <b-button class="searchButton"  squared variant="primary">Breakfast options</b-button>
        <b-button class="searchButton"  squared variant="primary">Snacks</b-button>
        <b-button class="searchButton"  squared variant="primary">Subscription</b-button>
        </div>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioSelected: "",
      selector1: null,
      selector2: null,
      selector3: null,
      checkBoxSelected: null,
      option1: [
        { value: "A", text: "a" },
        { value: "B", text: "b" },
        { value: "C", text: "c" },
        { value: "D", text: "d" }
      ],
      option2: [
        { value: "A", text: "a" },
        { value: "B", text: "b" },
        { value: "C", text: "c" },
        { value: "D", text: "d" }
      ],
      option3: [
        { value: "A", text: "a" },
        { value: "B", text: "b" },
        { value: "C", text: "c" },
        { value: "D", text: "d" }
      ],
      images: {
        logoSmall: require("../../assets/images/small-logo.png")
      }
    };
  }
};
</script>

<style>
.bg-info {
  background-color: white !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.navBand {
  color: black !important;
}
.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}
.navbar-toggler-icon {
  filter: brightness(0%);
}
.logoSmall {
  width: 200px;
}
.logoSmall:hover {
  filter: brightness(80%);
}
.search {
  position: fixed;
  z-index: 1;
  width: 100%;
}
.searchList{
  display: inline-block !important;
}
.header {
  color: #f8951d;
  text-align: left !important;
  margin-bottom: 20px;
  margin-top: 20px;
}
.search {
  margin-top: 4%;
}
.my-2 {
  background-color: #f8951d !important;
  border: none !important;
}
.my-3 {
  background-color: #f8951d !important;
  border: none !important;
  margin-left: 10px;
}
.my-2:hover {
  background-color: #f8b21d !important;
}
.my-3:hover {
  background-color: #f8b21d !important;
}

.custom-select {
  width: 80% !important;
}
.checkboxSection {
  border-style: none !important;
  margin-right: -5%;
}
.searchButton{
  margin-left:10px;
  margin-top:10px;
  display: inline-block;
  background-color: #f8951d !important;
  border-style: none !important;
}

.searchButton:focus{
    background-color: #f8b21d !important;
}
@media only screen and (max-width: 600px) {
  .search {
    position: fixed;
    z-index: 1;
    margin-top: 15%;
    width: 100%;
  }
}
</style>