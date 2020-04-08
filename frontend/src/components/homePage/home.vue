<template>
<div>
    <banner />
     <b-button v-b-toggle.sidebar-1 size="sm" class="advancedSearchButton">Advanced Search <BIconCaretRight/> </b-button>
    
     <advancedSearch id="sidebar-1"/>
    <div  class="d-flex align-items-center flex-column">
        <div v-for="n in this.companys.length" v-bind:key="n" class="mb-4">
            <company :idNumber="n" :company="companys[n- 1]"/>
        </div>
    </div>
</div>
</template>

<script>
const API_URL = 'http://localhost:3000/api/allCompanys'
import company from "./company.vue";
import banner from "./homeBanner"
import advancedSearch from "./advancedSearch"
import {BIconCaretRight} from 'bootstrap-vue'
export default {
    data() {
        return {
            companys: {},
            searchTest: this.search
        };
    },
    components: {
        company,
        banner,
        advancedSearch,
        BIconCaretRight
    },
    created: function () {
        this.$http.get(API_URL)
            .then(response => {
                this.companys = response.data
                console.log(this.search)
            }).catch(error => {
                console.log(error)
            })
    },

};
</script>

<style>
.advancedSearchButton{
    position: fixed;
    background-color:#f8951d !important ;
     left: -165px !important;
    transition: 0.3s!important;
   border:none !important;
    width: 200px!important;
    text-decoration: none!important;
    font-size: 20px!important;
    color: white!important;
    border-radius: 0 5px 5px 0!important;
}
.advancedSearchButton:hover{
    left:0 !important;
    background-color:#f8b21d !important;
}
</style>
