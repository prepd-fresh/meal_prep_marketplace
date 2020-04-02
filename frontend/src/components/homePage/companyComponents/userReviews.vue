<template>
  <div id="tester" class="card" style="width: 30rem;">
    <div class="card-body">
      <h5 class="card-title">{{singleReview.companyName}}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><testRating :grade="review.rating"/></h6>
      <h6>{{singleReview.email}}</h6>
      <p>{{singleReview.content}}</p>
      <p>{{singleReview.date}}</p>
    </div>
  </div>
</template>

<script>
import testRating from './testRating'
export default {
  data(){
    return{
      singleReview: this.review,

      grade: this.review.rating
    }
  },
  props:['review'],
  components:{
    testRating
  }
}
</script>

<style>

</style>