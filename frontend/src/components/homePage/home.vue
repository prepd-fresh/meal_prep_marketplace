<template>
<div>
    <banner />
    <ul v-for="n in this.companys.length" v-bind:key="n">
        <company :idNumber="n" :company="companys[n- 1]"/>
    </ul>
</div>
</template>

<script>
const API_URL = 'http://localhost:3000/api/allCompanys'
import company from "./company.vue";
import banner from "./homeBanner"
export default {
    data() {
        return {
            companys: {},
        };
    },
    components: {
        company,
        banner
    },

    created: function () {
        this.$http.get(API_URL)
            .then(response => {
                this.companys = response.data
                console.log(this.companys)
            }).catch(error => {
                console.log(error)
            })
    }
};
</script>

<style>
</style>
