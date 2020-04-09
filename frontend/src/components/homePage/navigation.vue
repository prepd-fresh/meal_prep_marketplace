<template>
<div>
    <b-navbar class="navBar" toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand class="navBand" href="/">
            <b-img :src="images.logoSmall" class="logoSmall"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" fixed="top"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/login" class="navBand">Login</b-nav-item>
                <b-nav-item href="/register" class="navBand">Register</b-nav-item>
                <b-nav-item href="/about" class="navBand">About</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                deliveryDays: [],
                deliveryLocations: [],
                paymentOptions: [],
                menuChanges: '',
                sizeOptions: '',
                vegetarian: '',
                vegan: '',
                extraProtien:''
            },
            images: {
                logoSmall: require("../../assets/images/small-logo.png")
            }
        };
    },
    beforeCreate: function(){
        if(this.$cookie.get("Auth") !== null && this.$cookie.get("role") !== null){
            if(this.$cookie.get("role") === "user")
                this.$router.push("/home")
            else if(this.$cookie.get("role") === "admin"){
                this.$router.push("/admin")
            }
        }
    },
};
</script>

<style>
.bg-info {
    background-color: white !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.advancedSearch {
    margin: 0%;
}
.sideBarHeader{
  margin-top: 10px;
  text-align: center;
  color: #f8951d;
}
.logoSideBar{
  margin-left: 35px;
  width: 250px;
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
    opacity: 0.9
}

.sideBarSearch{
  margin-left: 10px;
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
    margin-left: 10px;
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

.searchButton {
    margin-left: 10px;
    margin-top: 10px;
    display: inline-block !important;
    background-color: #f8951d !important;
    border-style: none !important;
    opacity: 1 !important;
}

.searchButton:focus {
    background-color: #f8b21d !important;
}

@media only screen and (max-width: 600px) {
    .search {
        position: fixed;
        z-index: 1;
        margin-top: 15%;
        width: 100%;
    }
    .navBar{
        width: 100%;
    }
}
</style>
