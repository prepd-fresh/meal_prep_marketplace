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
                    <b-button v-b-toggle.sidebar-1 size="sm" class="my-2 my-sm-0">Advanced Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <b-sidebar id="sidebar-1" shadow>
        <b-img :src="images.logoSmall" class="logoSideBar"></b-img>
        <h4 class="sideBarHeader">Advanced Search</h4>
        <div class="sideBarSearch">
            <b-form-group label="Delivery days:">
                <b-form-checkbox-group id="checkbox-group-2" v-model="form.deliveryDays" name="flavour-2">
                    <b-form-checkbox value="Monday">Monday</b-form-checkbox>
                    <b-form-checkbox value="Tuesday">Tuesday</b-form-checkbox>
                    <b-form-checkbox value="Wednesday">Wednesday</b-form-checkbox>
                    <b-form-checkbox value="Thursday">Thursday</b-form-checkbox>
                    <b-form-checkbox value="Friday">Friday</b-form-checkbox>
                    <b-form-checkbox value="Saturday">Saturday</b-form-checkbox>
                    <b-form-checkbox value="Sunday">Sunday</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Delivery Locations:">
                <b-form-checkbox-group id="checkbox-group-2" v-model="form.deliveryLocations" name="flavour-2">
                    <b-form-checkbox value="GTA">GTA</b-form-checkbox>
                    <b-form-checkbox value="Brampton">Brampton</b-form-checkbox>
                    <b-form-checkbox value="Hamilton">Hamilton</b-form-checkbox>
                    <b-form-checkbox value="Caledon">Caledon</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Payment Options:">
                <b-form-checkbox-group id="checkbox-group-2" v-model="form.paymentOptions" name="flavour-2">
                    <b-form-checkbox value="Stripe">Stripe</b-form-checkbox>
                    <b-form-checkbox value="Paypal">Paypal</b-form-checkbox>
                    <b-form-checkbox value="Credit card">Credit card</b-form-checkbox>
                    <b-form-checkbox value="cash">Cash</b-form-checkbox>
                    <b-form-checkbox value="E-Transfer">e-transfer</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <b-row>
                <b-col>
                    <b-form-group label="Menu Changes:">
                        <b-form-radio v-model="form.menuChanges" name="menuChange-radios" value="True">Yes</b-form-radio>
                        <b-form-radio v-model="form.menuChanges" name="menuChange-radios" value="False">No</b-form-radio>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Size Options:">
                        <b-form-radio v-model="form.sizeOptions" name="sizeOptions-radios" value="True">Yes</b-form-radio>
                        <b-form-radio v-model="form.sizeOptions" name="sizeOptions-radios" value="False">No</b-form-radio>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Vegatarian:">
                        <b-form-radio v-model="form.vegetarian" name="vegOption-radios" value="True">Yes</b-form-radio>
                        <b-form-radio v-model="form.vegetarian" name="vegOption-radios" value="False">No</b-form-radio>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Vegan:">
                        <b-form-radio v-model="form.vegan" name="vegan-radios" value="True">Yes</b-form-radio>
                        <b-form-radio v-model="form.vegan" name="vegan-radoos" value="False">No</b-form-radio>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-group label="Extra Protien:">
                <b-form-radio v-model="form.extraProtien" name="extraProtien-radios" value="True">Yes</b-form-radio>
                <b-form-radio v-model="form.extraProtien" name="extraProtien-radoos" value="False">No</b-form-radio>
            </b-form-group>
        </div>
        <b-button v-on:click="onSubmit" class="my-2">Search</b-button>
        <b-button v-on:click="clearForm" class="my-2">Clear</b-button>
    </b-sidebar>
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
                extraProtien: ''
            },
            images: {
                logoSmall: require("../../assets/images/small-logo.png")
            }
        };
    },
    beforeCreate: function () {
        if (this.$cookie.get("Auth") == null) {
            this.$router.push("/login")
        }
    },
    methods: {
        clearForm: function () {
            this.form.deliveryDays = []
            this.form.deliveryLocations = []
            this.form.paymentOptions = []
            this.form.menuChanges = ''
            this.form.sizeOptions = ''
            this.form.vegetarian = ''
            this.form.vegan = ''
            this.form.extraProtien = ''
        },
        logout: function () {
            //should kill cookie here
            this.$router.push("/")
        }
    }
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

.sideBarHeader {
    margin-top: 10px;
    text-align: center;
    color: #f8951d;
}

.logoSideBar {
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

.sideBarSearch {
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
}
</style>
