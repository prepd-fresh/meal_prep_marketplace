<template>
<div>
    <b-row>
        <b-col>
            <h4 class="mainHeader">Menu FQA</h4>
            <h6>Menu Changes:{{menuOptions.menuChangesOption}} </h6>
            <h6>vegitarian:{{menuOptions.extraProtienOption}} </h6>
            <h6>Extra Protien:{{menuOptions.veganOption}} </h6>
            <h6>Vegan:{{menuOptions.menuChangesOption}} </h6>
        </b-col>
        <b-col>
            <h4 class="mainHeader">Meal Menu Options</h4>
            <ul class="menuList" v-for="(meal, index) in this.menuOptions.mealOptions" v-bind:key="index.id">
                <li>BreakFast: {{meal.breakFast}}</li>
                <li>Lunch: {{meal.lunch}}</li>
                <li>Dinner: {{meal.dinner}}</li>
                <li>Snacks: {{meal.snacks}}</li>
            </ul>
        </b-col>
    </b-row>
    <div class="allMeals">
        <h6 class="numOfMeals">Total Amount of meals: </h6>
        <h6 class="numOfMeals">{{this.menuOptions.numberOfMeals}}</h6>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuOptions: this.companyMenuOptions
        }
    },
    props: ['companyMenuOptions']
};
</script>

<style>
.numOfMeals {
    text-align: center !important;
    margin-right: 50px;
    color: #f8951d;
    display:inline-block;
}

.mainHeader {
    color: #f8951d
}

.menuList {
    list-style: none;
}

</style>
