<template>
<div>
    <div class="description">
        <h4 class="headerPayment">Description</h4>
        {{this.paymentInfo.description}}
    </div>
    <b-row>
        <b-col>
            <h4 class="headerPayment">Payment Options</h4>
            <div class="d-flex mb-4 flex-wrap">
                <span class="d-flex align-items-center badge badge-warning mr-1 mb-1 text-capitalize justify-content-center" v-for="(n, i) in this.paymentInfo.paymentOptions" :key="i">{{n}}</span>
            </div>
        </b-col>
        <b-col>
            <h4 class="headerPayment">Prices</h4>
            <div class="d-flex mb-4 flex-wrap">
                <span class="d-flex align-items-center badge badge-success mr-1 mb-1 text-capitalize justify-content-center">{{this.paymentInfo.priceRange.lowest}}</span>

                <span class="d-flex align-items-center badge badge-success mr-1 mb-1 text-capitalize justify-content-center">{{this.paymentInfo.priceRange.highest}}</span>
            </div>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            <h4 class="test">Delivery Days </h4>
            <div class="d-flex mb-4 flex-wrap">
               <span class="d-flex align-items-center badge badge-primary mr-1 mb-1 text-capitalize justify-content-center" v-for="(day, index) in paymentInfo.deliveryDays" v-bind:key="index.id">{{day}}</span>
            </div>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            payments: this.paymentInfo
        }
    },
    props: ['paymentInfo'],
    created: function () {
        console.log(this.paymentInfo);
    }

};
</script>

<style>
.description {
    margin-bottom: 50px;
}
.test{
  margin-top:10px;
}
</style>
