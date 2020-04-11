<template>
<div>
    <b-modal id="EditCompanyModal" title="Edit Company" ok-only size="xl" v-bind:hide-footer="true" @submit="updateCompany">
        <b-form @submit.stop.prevent="updateCompany" class="companyForm">
            <b-form-group id="input-group-1" label="Company Name:" label-for="input-1" description="Please enter the name">
                <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Enter Company name"></b-form-input>
            </b-form-group>
            <b-form-group label="Delivery Locations:">
                <b-form-checkbox-group id="checkbox-group-2" v-model="form.deliveryLocations" name="flavour-2">
                    <b-form-checkbox value="GTA">GTA</b-form-checkbox>
                    <b-form-checkbox value="Brampton">Brampton</b-form-checkbox>
                    <b-form-checkbox value="Hamilton">Hamilton</b-form-checkbox>
                    <b-form-checkbox value="Caledon">Caledon</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Delivery days:">
                <b-form-checkbox-group id="checkbox-group-2" v-model="form.deliveryTimes" name="flavour-2">
                    <b-form-checkbox value="Monday">Monday</b-form-checkbox>
                    <b-form-checkbox value="Tuesday">Tuesday</b-form-checkbox>
                    <b-form-checkbox value="Wednesday">Wednesday</b-form-checkbox>
                    <b-form-checkbox value="Thursday">Thursday</b-form-checkbox>
                    <b-form-checkbox value="Friday">Friday</b-form-checkbox>
                    <b-form-checkbox value="Saturday">Saturday</b-form-checkbox>
                    <b-form-checkbox value="Sunday">Sunday</b-form-checkbox>
                </b-form-checkbox-group>
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
                    <b-form-checkbox value="none">None</b-form-checkbox>
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
                    <b-form-group label="Vegatarian:">
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
            <b-button  variant="outline-primary" type="submit">submit</b-button>
        </b-form>
    </b-modal>

    <b-table-simple responsive class="table">
        <b-thead>
            <tr>
                <td>
                    <strong>Name</strong>
                </td>
                <td>
                    <strong>Delivery Location</strong>
                </td>
                <td>
                    <strong>Delivery Days</strong>
                </td>
                <td>
                    <strong>Order Cut off</strong>
                </td>
                <td>
                    <strong>PaymentOptions</strong>
                </td>
                <td>
                    <strong>Price Range</strong>
                </td>
                <td>
                    <strong>Bulk Discount</strong>
                </td>
                <td>
                    <strong>Number of Meals</strong>
                </td>
                <td>
                    <strong>Meal Options</strong>
                </td>
                <td>
                    <strong>Menu Changes</strong>
                </td>
                <td>
                    <strong>Size Options</strong>
                </td>
                <td>
                    <strong>Vegertarian</strong>
                </td>
                <td>
                    <strong>Extra Protien</strong>
                </td>
                <td>
                    <strong>Vegan</strong>
                </td>
                <td>
                    <strong>Instagram Followers</strong>
                </td>
                <td>
                    <strong>Rating</strong>
                </td>
                <td>
                    <strong>Edit</strong>
                </td>
                <td>
                    <Strong>Delete</Strong>
                </td>
            </tr>
        </b-thead>
        <tbody>
            <tr v-for="(company, index) in companys" v-bind:key="index.id">
                <td>
                    <p>{{company.name}}</p>
                </td>
                <td>
                    <ul v-for="(location , index) in company.deliveryLocations" v-bind:key="index.id">
                        <li>{{location}}</li>
                    </ul>
                </td>
                <td>
                    <ul v-for="(days , index) in company.deliveryDays" v-bind:key="index.id">
                        <li>{{days}}</li>
                    </ul>
                </td>
                <td>
                    <p>Cut OffTime: {{company.cutOff.time}}{{company.cutOff.zone}}</p>
                </td>
                <td>
                    <ul v-for="(option, index) in company.paymentOptions" v-bind:key="index.id">
                        <li>{{option}}</li>
                    </ul>
                </td>
                <td>
                    <p>Lowest: {{company.priceRange.lowest}}</p>
                    <p>Highest: {{company.priceRange.highest}}</p>
                </td>
                <td>
                    <p>{{company.bulkDiscount}}</p>
                </td>
                <td>
                    <p>{{company.numberOfMeals}}</p>
                </td>
                <td>
                    <ul  v-for="(option, index) in company.mealOptions" v-bind:key="index.id">
                        <li>Breakfast: {{option.breakFast}}</li>
                        <li>Lunch: {{option.lunch}}</li>
                        <li>Dinner: {{option.dinner}}</li>
                        <li>Snacks: {{option.snacks}}</li>
                    </ul>
                </td>
                <td>
                    <p>{{company.menuChanges}}</p>
                </td>
                <td>
                    <p>{{company.sizeOptions}}</p>
                </td>
                <td>
                    <p>{{company.vegetarian}}</p>
                </td>
                <td>
                    <p>{{company.extraProtien}}</p>
                </td>
                <td>
                  <p>{{company.vegan}}</p>
                </td>
                <td>
                    {{company.instagramFollowers}}
                </td>
                <td>
                    <p>{{company.averageRating}}</p>
                </td>
                <td>

                    <BIconPencil class="edit" scale="1.4" v-b-modal.EditCompanyModal v-on:click ="editCompany(company._id)"  />
                </td>
                <td>

                    <BIconTrash class="delete" scale="1.4" v-on:click="deleteCompany(company._id)" />

                </td>
            </tr>
        </tbody>
    </b-table-simple>
</div>
</template>

<script>
var API_URL = 'http://localhost:3000/api/allCompanys'
var API_SINGLE = 'http://localhost:3000/api/singleCompany'
var API_URL_DELETE = 'http://localhost:3000/api/delete-company'
var API_UPDATE = 'http://localhost:3000/api/update-company'
import {
    BIconTrash,
    BIconPencil
} from 'bootstrap-vue'

export default {
    data() {
        return {
            currentCompany: -1,
            companys:[],
            form: {},
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
    components: {
        BIconTrash,
        BIconPencil
    },
    created: function () {
        this.resetForm();
        this.$http.get(API_URL)
            .then(response => {
                this.companys = response.data
            }).catch(error => {
                console.log(error.response)
            })
    },
    methods:{
        deleteCompany: function(id){
            this.$http.post(
                API_URL_DELETE,{
                    companyID:JSON.stringify(id)
                }
            ).then(response =>{
                if(response.data.message === "true"){
                    const index = this.companys.findIndex(company => company._id === id)
                    if(~index){
                        this.companys.splice(index,1)
                    }
                }
            })
        },
        editCompany: async function(id){
            const index = this.companys.findIndex(company => company._id === id);
            const currentCompanyID = this.companys[index]._id;
            
            var companyData;
            
            await this.$http.post(API_SINGLE, {companyID: JSON.stringify(currentCompanyID)})
            .then(response => {
                if(response.data){
                    companyData = response.data;
                }
            }).catch((err) => {
                console.log(err.response);
            });

            this.currentCompany = currentCompanyID;
            this.form = companyData;
            console.log(this.form);
        },
        updateCompany: async function() {
            console.log('submitted')
            await this.$http.post(API_UPDATE, {company: JSON.stringify(this.form)})
            .then(response => {
                console.log(response.message);
                if(response.message){
                    console.log('success');
                    this.currentCompany = -1;
                    this.resetForm();
                }
            }).catch((err) => {
                console.log(err.response);
            });
        },
        resetForm: function() {
            this.form = {
                name: '',
                deliveryLocations: [],
                deliveryDays: [],
                cutOff: {
                    time: '',
                    zone:''
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
        }
    }
}
</script>

<style>
.edit { 
    padding: 30px;
    color:black;
}
.edit:hover{
    color:red;
}
.delete{
    padding: 30px;
    color:black

}
.delete:hover{
    color: red;
}
.table{
    margin-left: 10px;
    margin-right: 10px;
}
.table td{
    padding:30px;
}
</style>
