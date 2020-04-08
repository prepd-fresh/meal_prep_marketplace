<template>
<div>
    <b-navbar class="navBar" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand class="navBand" href="/admin">
            <b-img :src="images.logoSmall" class="logoSmall"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item v-on:click="logout" class="navBand">Logout</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                logoSmall: require("../../assets/images/small-logo.png")
            }
        };
    },
    methods: {
        logout: function () {
            this.$cookie.delete("Auth")
            this.$cookie.delete("role")
            this.$router.push("/")

        },
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
  opacity: 0.9
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
  opacity: 1 !important;
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
