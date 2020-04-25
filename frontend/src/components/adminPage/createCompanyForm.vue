<template>
<b-modal id="modalPopover" title="Add new company" ok-only size="xl" v-bind:hide-footer="true">
    <div class="companyForm">
        <b-form-group id="input-group-1" label="Company Name:" label-for="input-1" description="Please enter the name">
            <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Enter Company name"></b-form-input>
        </b-form-group>
        <b-form-group label="Delivery Locations:">
            <b-form-checkbox-group id="checkbox-group-2" v-model="form.deliveryLocations" name="flavour-2">
                <b-form-checkbox value="GTA">GTA</b-form-checkbox>
                <b-form-checkbox value="Brampton">Brampton</b-form-checkbox>
                <b-form-checkbox value="Hamilton">Hamilton</b-form-checkbox>
                <b-form-checkbox value="Burlington">Burlington</b-form-checkbox>
                <b-form-checkbox value="Vaughan">Vaughan</b-form-checkbox>
                <b-form-checkbox value="Mississauga">Mississauga</b-form-checkbox>
                <b-form-checkbox value="Guelph">Guelph</b-form-checkbox>
                <b-form-checkbox value="Waterloo">Waterloo</b-form-checkbox>
                <b-form-checkbox value="St.Catharines">St.Catharines</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>
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
        <b-form-group label="Company Description/Statment:">
            <b-form-textarea id="textarea" v-model="form.description" placeholder="Enter Description..." rows="3" max-rows="6" v-on:keyup="countdown"></b-form-textarea>
            <pre class="mt-3 mb-0" >Charcters left: {{remainingCount}}</pre>
        </b-form-group>
        <b-row>
            <b-col>
                <p>Time: </p>
                <b-form-select v-model="form.cutOff.time" :options="orderCutOffOptions"></b-form-select>
            </b-col>
            <b-col>
                <p>Time Period:</p>
                <b-form-select label="Cut off" v-model="form.cutOff.zone" :options="orderCutOffTimeZone"></b-form-select>
            </b-col>

        </b-row>
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
                <b-form-group id="input-group-1" label="Lowest:" label-for="input-1" description="Please enter the lowest meal price">
                    <b-form-input id="input-1" v-model="form.priceRange.lowest" type="number" required placeholder="Enter lowest Price"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group id="input-group-1" label="Highest:" label-for="input-1" description="Please enter the higest meal price">
                    <b-form-input id="input-1" v-model="form.priceRange.highest" type="number" required placeholder="Enter highest Price"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-form-group label="Bulk Discount">
            <b-form-radio v-model="form.bulkDiscount" name="some-radios" value="True">Yes</b-form-radio>
            <b-form-radio v-model="form.bulkDiscount" name="some-radios" value="False">No</b-form-radio>
        </b-form-group>
        <b-form-group id="input-group-1" label="Number of Meals" label-for="input-1" description="number of meals the company offers">
            <b-form-input id="input-1" v-model="form.numberOfMeals" type="number" required placeholder="Number of meals"></b-form-input>
        </b-form-group>
        <b-row>
            <b-col>
                <p>BreakFast: </p>
                <b-form-select v-model="form.mealOptions.breakFast" :options="mealOptions"></b-form-select>
            </b-col>
            <b-col>
                <p>Lunch:</p>
                <b-form-select label="Cut off" v-model="form.mealOptions.lunch" :options=" mealOptions"></b-form-select>
            </b-col>
            <b-col>
                <p>Dinner:</p>
                <b-form-select label="Cut off" v-model="form.mealOptions.dinner" :options=" mealOptions"></b-form-select>
            </b-col>
            <b-col>
                <p>Snacks:</p>
                <b-form-select label="Cut off" v-model="form.mealOptions.snacks" :options=" mealOptions"></b-form-select>
            </b-col>
        </b-row>
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
            <b-col>
                <b-form-group label="Vegetarian:">
                    <b-form-radio v-model="form.vegetarian" name="vegOption-radios" value="True">Yes</b-form-radio>
                    <b-form-radio v-model="form.vegetarian" name="vegOption-radios" value="False">No</b-form-radio>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Extra Protien:">
                    <b-form-radio v-model="form.extraProtien" name="extraProtien-radios" value="True">Yes</b-form-radio>
                    <b-form-radio v-model="form.extraProtien" name="extraProtien-radoos" value="False">No</b-form-radio>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Vegan:">
                    <b-form-radio v-model="form.vegan" name="vegan-radios" value="True">Yes</b-form-radio>
                    <b-form-radio v-model="form.vegan" name="vegan-radoos" value="False">No</b-form-radio>
                </b-form-group>
            </b-col>
        </b-row>
        <b-form-group id="input-group-1" label="Intagram Followers: " label-for="input-1" description="Please enter the higest meal price">
            <b-form-input id="input-1" v-model="form.instagramFollowers" type="number" required placeholder="Enter number of Instagram followers"></b-form-input>
        </b-form-group>
        <b-button v-on:click="onSubmit" class="buttonSubmit">submit</b-button>
    </div>
</b-modal>
</template>

<script>
const API_URL = "https://prepdmeals.ca:3000/api/addcompany"
export default {
    data() {
        return {
            time: null,
            timeZone: null,
            remainingCount: 400,
            maxCount: 400,
            form: {
                name: '',
                deliveryLocations: [],
                deliveryDays: [],
                description:'',
                cutOff: {
                    time: '',
                    zone: ''
                },
                paymentOptions: [],
                priceRange: {
                    lowest: '',
                    highest: ''
                },
                bulkDiscount: null,
                numberOfMeals: '',
                mealOptions: {
                    breakFast: '',
                    lunch: '',
                    dinner: '',
                    snacks: ''
                },
                menuChanges: '',
                sizeOptions: '',
                vegetarian: '',
                extraProtien: '',
                vegan: '',
                instagramFollowers: ''
            },
            orderCutOffTimeZone: [{
                value: 'AM',
                text: 'AM'
            }, {
                value: 'PM',
                text: 'PM'
            }],
            mealOptions: [{
                    value: 'None',
                    text: 'none'
                }, {
                    value: '1',
                    text: '1'
                },
                {
                    value: '2',
                    text: '2'
                },
                {
                    value: '3',
                    text: '3',
                },
                {
                    value: '4',
                    text: '4'
                },
                {
                    value: '5',
                    text: '5',
                },
                {
                    value: '6',
                    text: '6',
                },
                {
                    value: '7',
                    text: '7',
                },
                {
                    value: '8',
                    text: '8',
                },
                {
                    value: '9',
                    text: '9',
                },
                {
                    value: '10 +',
                    text: '10 +',
                },

            ],
            orderCutOffOptions: [{
                    value: '1',
                    text: '1'
                },
                {
                    value: '2',
                    text: '2'
                },
                {
                    value: '3',
                    text: '3',
                },
                {
                    value: '4',
                    text: '4'
                },
                {
                    value: '5',
                    text: '5',
                }, {
                    value: '6',
                    text: '6',
                }, {
                    value: '7',
                    text: '7',
                }, {
                    value: '8',
                    text: '8',
                }, {
                    value: '9',
                    text: '9',
                }, {
                    value: '10',
                    text: '10',
                },
                {
                    value: '11',
                    text: '11',
                },
                {
                    value: '12',
                    text: '12',
                },

            ]
        }
    },
    methods: {
        onSubmit: function () {
            this.$http
                .post(
                    API_URL, {
                        company: JSON.stringify(this.form)
                    }
                ).then(responces => {
                    if (responces.data.message === "true") {
                        this.$emit("addedCompany", true)
                        this.$bvModal.hide('modalPopover')
                        this.makePassToast();
                        this.clearForm()
                        
                    }
                })
        },
        makePassToast(append = false, ) {
            this.$bvToast.toast(`Created Company successfully`, {
                title: "Created successfully",
                autoHideDelay: 5000,
                appendToast: append,
                variant: "success"
            })
        },
        clearForm(){
             this.form= {
                name: '',
                deliveryLocations: [],
                deliveryDays: [],
                description:'',
                cutOff: {
                    time: '',
                    zone: ''
                },
                paymentOptions: [],
                priceRange: {
                    lowest: '',
                    highest: ''
                },
                bulkDiscount: null,
                numberOfMeals: '',
                mealOptions: {
                    breakFast: '',
                    lunch: '',
                    dinner: '',
                    snacks: ''
                },
                menuChanges: '',
                sizeOptions: '',
                vegetarian: '',
                extraProtien: '',
                vegan: '',
                instagramFollowers: ''
            }

        },
        countdown: function () {
            this.remainingCount = this.maxCount - this.form.description.length;
            this.hasError = this.remainingCount < 0;
        },
    }
}
</script>

<style>

</style>
