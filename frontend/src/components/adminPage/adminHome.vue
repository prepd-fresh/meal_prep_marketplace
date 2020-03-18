<template>
<div>
    <div>
        <b-button v-b-modal.modalPopover>Add company</b-button>

        <b-modal id="modalPopover" title="Add new company" ok-only size="xl" v-bind:hide-footer="true">
            <div class="companyForm">
                <b-form-group id="input-group-1" label="Company Name:" label-for="input-1" description="Please enter the name">
                    <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Enter email"></b-form-input>
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
                    <b-col><p>Time: </p><b-form-select  v-model="time" :options="orderCutOffOptions"></b-form-select></b-col>
                    <b-col><p>Time Period:</p><b-form-select label="Cut off" v-model="timeZone" :options="orderCutOffTimeZone"></b-form-select></b-col>

                </b-row>
                <b-form-group label="Payment Options:">
                    <b-form-checkbox-group id="checkbox-group-2" v-model="form.paymentOptions" name="flavour-2">
                        <b-form-checkbox value="Monday">Stripe</b-form-checkbox>
                        <b-form-checkbox value="Tuesday">Paypal</b-form-checkbox>
                        <b-form-checkbox value="Wednesday">Credit</b-form-checkbox>
                        <b-form-checkbox value="Wednesday">Cash</b-form-checkbox>
                        <b-form-checkbox value="Wednesday">None</b-form-checkbox>
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
                <button v-on:click="onSubmit">submit</button>
            </div>
        </b-modal>
    </div>
    <div class="tabs">
        <b-tabs content-class="mt-3">
            <b-tab title="User List" active>
                <userList />
            </b-tab>
            <b-tab title="Company List">
                <companyList />
            </b-tab>
            <b-tab title="comments">
                <p>will show comments here</p>
            </b-tab>
        </b-tabs>
    </div>

</div>
</template>

<script>
import userList from "./userList"
import companyList from "./companyList"
export default {
    data() {
        return {
          time:null,
          timeZone:null,
          form: {
                name: '',
                deliveryLocations: [],
                deliveryTimes: [],
                cutOff: "Add time and Time Zone values togehter ",
                paymentOptions: [],
                priceRange:{
                    lowest:'',
                    highest:''
                }
            },
            orderCutOffTimeZone:[
            {
              value: 'AM',
              text: 'AM'
            },{
              value: 'PM',
              text:'PM'
            }],
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
        userList,
        companyList
    },
    methods: {
        onSubmit: function () {
            console.log(this.form)
        }
    }
}
</script>

<style>
.tabs {
    margin-top: 30px;
}

.companyForm {
    padding: 10%;
}

#custom-select {
    width: 10% !important;
}
</style>
