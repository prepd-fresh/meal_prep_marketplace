<template>
<div>
    <banner />
    <b-button v-b-toggle.sidebar-1 size="sm" class="advancedSearchButton">Advanced Search
        <BIconCaretRight scale="1.4" />
    </b-button>

    <advancedSearch id="sidebar-1" @clickSearch="onSearch" @clearedForm="restCompanys" />
    <div class="container">
        <div class="d-flex align-items-center flex-column">
            <div v-for="n in this.companys.length" v-bind:key="n" class="mb-4 row">
                <company :idNumber="n" :company="companys[n- 1]" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
const API_URL = 'http://localhost:3000/api/allCompanys'
import company from "./company.vue";
import banner from "./homeBanner"
import advancedSearch from "./advancedSearch"
import {
    BIconCaretRight
} from 'bootstrap-vue'
export default {
    data() {
        return {
            companys: {},
            tempCompanys: {}

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
                this.tempCompanys = response.data
            }).catch(error => {
                console.log(error)
            })
    },
    methods: {
        onSearch(value) {
            var searchItems = JSON.parse(JSON.stringify(value))
            this.companys = this.tempCompanys
            if (value === "empty") {
                this.companys = this.tempCompanys
            } else {
                if (searchItems.deliveryDays.length !== 0) {
                    searchItems.deliveryDays.forEach(element => {
                        this.companys = this.companys.filter(item => (item.deliveryDays.includes(element)))
                    });
                }
                if (searchItems.deliveryLocations.length !== 0) {
                    searchItems.deliveryLocations.forEach(element => {
                        this.companys = this.companys.filter(item => (item.deliveryLocations.includes(element)))
                    });
                }
                if (searchItems.paymentOptions.length !== 0) {
                    searchItems.paymentOptions.forEach(element => {
                        this.companys = this.companys.filter(item => (item.paymentOptions.includes(element)))
                    });
                }
                if (searchItems.menuChanges.length !== 0) {
                    this.companys =this.companys.filter(item => (item.menuChanges.includes(searchItems.menuChanges)))
                
                }
                if (searchItems.sizeOptions.length !== 0) {
                    this.companys =this.companys.filter(item => (item.sizeOptions.includes(searchItems.sizeOptions)))
                
                }
                if (searchItems.vegetarian.length !== 0) {
                    this.companys =this.companys.filter(item => (item.vegetarian.includes(searchItems.vegetarian)))
                
                }
                if (searchItems.vegan.length !== 0) {
                    this.companys =this.companys.filter(item => (item.vegan.includes(searchItems.vegan)))
                
                }
                 if (searchItems.extraProtien.length !== 0) {
                    this.companys =this.companys.filter(item => (item.extraProtien.includes(searchItems.extraProtien)))
                
                }
            }

        },
        restCompanys(value) {
            if (value === true) {
                this.companys = this.tempCompanys
            }
        }
    },

}
</script>

<style>
.advancedSearchButton {
    position: fixed;
    background-color: #f8951d !important;
    left: -165px !important;
    transition: 0.3s !important;
    border: none !important;
    padding: 5px !important;
    width: 200px !important;
    text-decoration: none !important;
    font-size: 20px !important;
    color: white !important;
    border-radius: 0 5px 5px 0 !important;
    z-index: 1 !important;
}

.advancedSearchButton:hover {
    z-index: 10 !important;
    left: 0 !important;
    background-color: #f8b21d !important;
}
</style>
