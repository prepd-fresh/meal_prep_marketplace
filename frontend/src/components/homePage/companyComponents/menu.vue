<template>
  <div>
  <h4>Menu FQA</h4>
  <h6>Menu Changes:{{menuOptions.menuChangesOption}} </h6>
  <h6>vegitarian:{{menuOptions.extraProtienOption}} </h6>
  <h6>Extra Protien:{{menuOptions.veganOption}} </h6>
  <h6>Vegan:{{menuOptions.menuChangesOption}} </h6>

  <h4>Meal Menu Options</h4>
  <ul v-for="(meal, index) in this.menuOptions.mealOptions" v-bind:key="index.id">
    <li>BreakFast: {{meal.breakFast}}</li>
    <li>Lunch: {{meal.lunch}}</li>
    <li>Dinner: {{meal.dinner}}</li>
    <li>Snacks: {{meal.snacks}}</li>
  </ul>
  <h6>Total Amount of meals: {{this.menuOptions.numberOfMeals}}</h6>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuOptions: this.companyMenuOptions
    }
  },
  props:['companyMenuOptions']
};
</script>

<style>
</style>