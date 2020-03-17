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
                    <strong>Delivery Times</strong>
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
            </tr>
        </b-thead>
        <tbody>
            <tr v-for="(company, index) in companys" v-bind:key="index.id">
                <td>
                    <p>{{company.CompanyName}}</p>
                </td>
                <td>
                    <p>{{company.DeliveryLocations}}</p>
                </td>
                <td>
                    <p>{{company.DeliveryTimes}}</p>
                </td>
                <td>
                    <p>{{company.OrderCutoff}}</p>
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
                    <ul v-for="(option, index) in company.OptionsMeals" v-bind:key= index.id>
                        <li>Breakfast: {{option.BreakFast}}</li>
                        <li>Lunch: {{option.Lunch}}</li>
                        <li>Dinner: {{option.Dinner}}</li>
                        <li>Snacks: {{option.Snacks}}</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </b-table-simple>
</div>
</template>

<script>
var API_URL = 'http://localhost:3000/api/allCompanys'
export default {
    data() {
        return {
            companys: ""
        }
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

</style>
