<template>
<div>
<div class="layout">
  <b-card class="cardMain" no-body  style="max-width: 1000px;" @click="$bvModal.show('bv-modal-'+idNumber)">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img  :src="images.foodPicture" class="rounded-0" ></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body >
          <b-card-text>
            <h4 class = "header">{{idNumber}} Example of comapny</h4>
            <companyMainInfo/>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
<div>
    <b-modal :id="'bv-modal-'+idNumber" size="l" hide-footer>
      <template v-slot:modal-title>Company : {{idNumber}}</template>
      <b-card-group deck>
        <b-card :img-src="images.foodPicture" class="cardImage" img-alt="Card image" img-top>
          <b-card-text>
            <companyInfo/>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-modal>
  </div>
  </div>
</template>

<script>
import companyInfo from './companyInfo'
import companyMainInfo from './companyMainInfo'
export default {
  data() {
    return {
      images: {
        foodPicture: require("../../assets/images/burrito.jpg")
      }
    };
  },
  props: {
    idNumber: Number
  },
  components:{
    companyInfo,
    companyMainInfo
  },
  methods: {}
};
</script>

<style>
.modal-title{
  color:#f8951d;
}
.cardImage{
  
}
.cardMain:hover {
  background:#F5F5F5;
}
.cardMain{
  margin:5% !important;
  margin-right: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.card{
  margin-top: 0% !important;
}
.layout{
  margin-left:10%; 
}
.header{
  color:#f8951d;
  text-align: center;
}
.modal-body{
  margin:-80px;
}
.round-0{
  margin:10px !important;
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