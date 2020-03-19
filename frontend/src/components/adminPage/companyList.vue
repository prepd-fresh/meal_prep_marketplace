<template>
<div>
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
                    <p>{{company.cutOff}}</p>
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
                    <ul v-for="(option, index) in company.mealOptions" v-bind:key=index.id>
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

                    <BIconPencil class="edit" scale="1.4"  />

                </td>
                <td>

                    <BIconTrash class="delete" scale="1.4" />

                </td>
            </tr>
        </tbody>
    </b-table-simple>
</div>
</template>

<script>
var API_URL = 'http://localhost:3000/api/allCompanys'
import {
    BIconTrash,
    BIconPencil
} from 'bootstrap-vue'

export default {
    data() {
        return {
            companys: ""
        }
    },
    components: {
        BIconTrash,
        BIconPencil
    },
    created: function () {
        this.$http.get(API_URL)
            .then(response => {
                this.companys = response.data
                console.log(this.company)
                console.log(this.company.CompanyName)
            }).catch(error => {
                console.log(error.response)
            })
    }
}
</script>

<style>
.edit { 
    padding: 30px;
    color:black;
}
.edit:hover{
    
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
