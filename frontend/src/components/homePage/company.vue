<template>
<div>
<div class="layout">
  <b-card class="cardMain" no-body  style="max-width: 1000px;" @click="$bvModal.show('bv-modal-'+idNumber)">
    <b-row no-gutters class="mh-264">
      <b-col md="6">
        <b-card-img  :src="images.foodPicture" class="rounded-0 mh-264 card-img" ></b-card-img>
      </b-col>
      <b-col md="6" class="mh-264 overflow-auto">
        <b-card-body >
          <b-card-text>
            <h4 class = "header">{{company.name}}</h4>
            <h5>Delivery locations: </h5>
              <div class="d-flex mb-4">
                <span class="badge badge-primary mr-2" v-for="(location, index) in company.deliveryLocations" v-bind:key="index.id">
                  {{location}}
                </span>
              </div>
              <h5>Payment Options</h5>
              <div class="d-flex mb-4">
                <span class="badge badge-secondary mr-2 text-capitalize" v-for="(option, index) in company.paymentOptions" v-bind:key="index.id">
                  {{option}}
                </span>
              </div>
               <h5>delivery days</h5>
              <div class="d-flex mb-4">
                <span class="badge badge-secondary mr-2 text-capitalize" v-for="(option, index) in company.deliveryDays" v-bind:key="index.id">
                  {{option}}
                </span>
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
            <companyInfo :companyInformation ="companyInformation" />
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
      companyInformation : this.company,

      images: {
        foodPicture: require("../../assets/images/burrito.jpg")
      }
    };
  },
  props: {
    idNumber: Number,
    company: {}
  },
  components:{
    companyInfo,
  },

  

};
</script>

<style>
.modal-title{
  color:#f8951d;
}

.cardMain:hover {
  background:#F5F5F5;
}
.cardMain{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card{
  margin-top: 0% !important;
}
.header{
  color:#f8951d;
  text-align: center;
  margin-top: 0 !important;
}
.modal-body{
  margin:-80px;
}
.round-0{
  margin:10px !important;
}

ul {
  margin-bottom: 0 !important;
}
@media only screen and (min-width: 768px) {
  .mh-264{
    max-height: 264px;
  }
}

@media only screen and (max-width: 600px) {
  .layout{
    margin-left:0%; 
  }

  .modal-body{
    margin:-10px;
  }
}
</style>