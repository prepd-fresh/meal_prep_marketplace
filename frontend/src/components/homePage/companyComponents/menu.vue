<template>
  <div>
    <b-row>
      <b-col>
        <h4 class="mainHeader">Menu FQA</h4>
        <h6>
          Menu Changes:
          <svg
            :class="'ml-2 bi' + (menuOptions.menuChangesOption ? 'bi-check' : 'b-x') "
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
              clip-rule="evenodd"
            />
          </svg>
        </h6>
        <h6>Vegan:
            <svg
            :class="'ml-2 bi' + (menuOptions.veganOption ? 'bi-check' : 'b-x') "
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
              clip-rule="evenodd"
            />
          </svg>
        </h6>
        <h6>Extra Protein:
            <svg
            :class="'ml-2 bi' + (menuOptions.extraProtienOption ? 'bi-check' : 'b-x') "
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
              clip-rule="evenodd"
            />
          </svg>
        </h6>
      </b-col>
      <b-col>
        <h4 class="mainHeader">
            {{menuOptions.numberOfMeals}} Meal Menu Options
        </h4>
        <div
          class="d-flex flex-column flex-wrap"
          v-for="(meal, index) in this.menuOptions.mealOptions"
          v-bind:key="index.id"
        >            
            <div class="d-flex mb-1">
                <h6>Breakfast: </h6>
                <span class="badge-pill badge-secondary ml-1">{{meal.breakFast}} </span>
            </div>
            <div class="d-flex mb-1">
                <h6>Lunch: </h6>
                <span class="badge-pill badge-secondary ml-1">{{meal.lunch}}</span>
            </div>
            <div class="d-flex mb-1">
                <h6>Dinner: </h6>
                <span class="badge-pill badge-secondary ml-1">{{meal.dinner}}</span>
            </div>
            <div class="d-flex mb-1">
                <h6>Snacks: </h6>
                <span class="badge-pill badge-secondary ml-1">{{meal.snacks}}</span>
            </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOptions: this.companyMenuOptions
    };
  },
  props: ["companyMenuOptions"]
};
</script>

<style>
.numOfMeals {
  text-align: center !important;
  margin-right: 50px;
  color: #f8951d;
  display: inline-block;
}

.mainHeader {
  color: #f8951d;
}

.menuList {
  list-style: none;
}
</style>
