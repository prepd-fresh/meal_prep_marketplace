<template>
<div>
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
                    <b-form-checkbox value="Burlington">Burlington</b-form-checkbox>
                    <b-form-checkbox value="Vaughan">Vaughan</b-form-checkbox>
                    <b-form-checkbox value="Mississauga">Mississuaga</b-form-checkbox>
                    <b-form-checkbox value="Guelph">Guelph</b-form-checkbox>
                    <b-form-checkbox value="Waterloo">Waterloo</b-form-checkbox>
                    <b-form-checkbox value="St.Catharines">St.Catharines</b-form-checkbox>
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
            this.$emit("clearedForm", true)
        },
        onSubmit: function () {
            if (this.emptyChecker() === true) {
                this.$emit("clickSearch", "empty")
            } else {
                this.$emit("clickSearch", this.form)
            }

        },
        emptyChecker: function () {
            if (this.form.deliveryDays.length === 0 && this.form.deliveryLocations.length === 0 && this.form.paymentOptions.length === 0 &&
                this.form.menuChanges.length === 0 && this.form.sizeOptions.length === 0 && this.form.vegetarian.length === 0 &&
                this.form.vegan.length === 0 && this.form.extraProtien.length === 0) {
                return true
            } else {
                return false;
            }
        }
    }
}
</script>

<style>

</style>
