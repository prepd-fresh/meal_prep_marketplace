<template>
<div>
    <div class="layout">
        <b-card class="cardMain" no-body style="max-width: 1000px;" @click="$bvModal.show('bv-modal-'+idNumber)">
            <b-row no-gutters>
                <b-col lg="6">
                    <b-card-img :src="images.foodPicture" class="rounded-0 card-img"></b-card-img>
                </b-col>
                <b-col lg="6" class="overflow-auto">
                    <b-card-body>
                        <b-card-text>
                            <h4 class="header">{{company.name}}</h4>
                            <div class="secondary">
                                <h5 class="secondayHeader">Delivery Locations: </h5>
                                <div class="d-flex flex-wrap mb-4">
                                    <span class="d-flex align-items-center badge badge-primary mr-1 mb-1 justify-content-center" v-for="(location, index) in company.deliveryLocations" v-bind:key="index.id">
                                        {{location}}
                                    </span>
                                </div>
                                <h5 class="secondayHeader">Payment Options</h5>
                                <div class="d-flex mb-4 flex-wrap">
                                    <span class="d-flex align-items-center badge badge-warning mr-1 mb-1 text-capitalize justify-content-center" v-for="(option, index) in company.paymentOptions" v-bind:key="index.id">
                                        {{option}}
                                    </span>
                                </div>
                            </div>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
    <div>
        <b-modal :id="'bv-modal-'+idNumber" size="l" hide-footer>
            <template v-slot:modal-title>{{company.name}}</template>
            <b-card-group deck>
                <b-card :img-src="images.foodPicture" class="cardImage" img-alt="Card image" img-top>
                    <b-card-text>
                        <companyInfo :companyInformation="companyInformation" />
                    </b-card-text>
                </b-card>
            </b-card-group>
        </b-modal>
    </div>

</div>
</template>

<script>
import companyInfo from './companyInfo'
export default {
    data() {
        return {
            companyInformation: this.company,

            images: {
                foodPicture: this.company.logoURL
            }
        };
    },
    props: {
        idNumber: Number,
        company: {}
    },
    components: {
        companyInfo,
    },

};
</script>

<style>
.modal-title {
    color: #f8951d;
}

.secondayHeader{
  color:black;
}

.cardMain:hover {
    background: #F5F5F5;
    
}
.badge{
  width:80px !important;
  height: 30px;
}

.cardMain {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card {
    margin-top: 0% !important;
}

.header {
    color: #f8951d;
    text-align: center;
    margin-top: -10px !important;
}

.modal-body {
    margin: -80px;
}

.round-0 {
    margin: 10px !important;
}

ul {
    margin-bottom: 0 !important;
}

@media only screen and (max-width: 600px) {
    .layout {
        margin-left: 0%;
    }

    .modal-body {
        margin: -10px;
    }
}
</style>
