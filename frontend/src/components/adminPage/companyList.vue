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
                    <strong>Order Options</strong>
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
                    <strong>Options of Meals</strong>
                </td>
                <td>
                    <strong>Menu Changes</strong>
                </td>
                <td>
                    <strong>Size Options</strong>
                </td>
                <td>
                    <strong>Size Description</strong>
                </td>
                <td>
                    <strong>Offer Vegertarian</strong>
                </td>
                <td>
                    <strong>Payment Method</strong>
                </td>
                <td>
                    <strong>Delivery Costs</strong>
                </td>
                <td>
                    <strong>Description</strong>
                </td>
                <td>
                    <strong>Other Products</strong>
                </td>
                <td>
                    <strong>Instagram Followers</strong>
                </td>
                <td>
                    <strong>Advanced Search</strong>
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
                    <p>{{company.CompanyName}}</p>
                </td>
                <td>
                    <ul v-for="(location , index) in company.DeliveryLocations" v-bind:key="index.id">
                        <li>{{location}}</li>
                    </ul>
                </td>
                <td>
                    <ul v-for="(days , index) in company.DeliveryTimes" v-bind:key="index.id">
                        <li>{{days}}</li>
                    </ul>
                </td>
                <td>
                    <ul v-for="(times, index) in company.OrderCutoff" v-bind:key="index.ind">
                        <li>{{times}}</li>
                    </ul>

                </td>
                <td>
                    <ul v-for="(orderOptions, index) in company.OrderOptions" v-bind:key="index.id">
                        <li>
                            Subscription: {{orderOptions.Subscription}}
                        </li>
                        <li>
                            One time: {{orderOptions.OneTimeOrder}}
                        </li>
                        <li>
                            MYO: {{orderOptions.MYO}}
                        </li>
                    </ul>
                </td>
                <td>
                    <ul v-for="(price, index) in company.PriceRange" v-bind:key="index.id">
                        <li>
                            Lowest: {{price.lowest}}
                        </li>
                        <li>
                            highest: {{price.highest}}
                        </li>
                    </ul>
                </td>
                <td>
                    <p>{{company.BulkDiscount}}</p>
                </td>
                <td>
                    <p>{{company.NumberOfMeals}}</p>
                </td>
                <td>
                    <ul v-for="(option, index) in company.OptionsMeals" v-bind:key=index.id>
                        <li>Breakfast: {{option.BreakFast}}</li>
                        <li>Lunch: {{option.Lunch}}</li>
                        <li>Dinner: {{option.Dinner}}</li>
                        <li>Snacks: {{option.Snacks}}</li>
                    </ul>
                </td>
                <td>
                    <p>{{company.MenuChanges}}</p>
                </td>
                <td>
                    <p>{{company.SizeOptions}}</p>
                </td>
                <td>
                    <p>{{company.SizeDescription}}</p>
                </td>
                <td>
                    <p>{{company.OfferVegeraian}}</p>
                </td>
                <td>
                    <ul>
                        <li v-for="(method, index) in company.PaymentMethod" v-bind:key=index.id>
                            {{method}}
                        </li>
                    </ul>
                </td>
                <td>
                    {{company.DeliverCosts}}
                </td>
                <td>
                    <p>{{company.DeliverCostDescription}}</p>
                </td>
                <td>
                    <p>{{company.OtherProducts}}</p>
                </td>
                <td>
                    <p>{{company.InstagramFollowers}}</p>
                </td>
                <td>
                    <p>{{company.OtherProductDescription}}</p>
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
