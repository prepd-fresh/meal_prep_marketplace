<template>
<div>
    <h1 class="mainTitle">{{this.companyName}}</h1>
    <b-button v-b-toggle.collapse-1 variant="primary" class="reviewButton">Leave a review</b-button>
    <b-collapse id="collapse-1" class="mt-2">
        <b-card>
            <div>
                <h5 >Rating:</h5>
                <reviewStars :grade="0" @starCount="onReviewStarClicked" />
                <b-form-textarea id="textarea" v-model="message" placeholder="Enter review..." rows="3" max-rows="6" v-on:keyup="countdown"></b-form-textarea>

                <pre class="mt-3 mb-0"  v-bind:class="{'text-danger': hasError }" >Charcters left: {{remainingCount}}</pre>

            </div>
            <b-button class="submitReview" v-on:click="submitComment">Submit Review </b-button>
        </b-card>
    </b-collapse>
    <h2>All existing revies here</h2>
    {{allComments}}
</div>
</template>

<script>
const API_URL = 'http://localhost:3000/api/allComments' 
import reviewStars from "./rating"
export default {
    data() {
        return {
            companyName:this.companyCurrentName,
            maxCount: 150,
            remainingCount: 150,
            message: '',
            hasError: false,
            allComments: '',

            comment:{
                email:'',
                companyName:'',
                message:'',
                rating:0

            }
        }
    },
    components: {
        reviewStars
    },
    props:['companyCurrentName'],

    created: function() {
        this.$http.post(API_URL, {
            companyName: JSON.stringify(this.companyCurrentName)
        }).then(response =>{
            this.allComments = response.data
            console.log(response)
        }).catch((error) =>{
            console.log(error)
        })

    },
    methods:{
        countdown:function(){
            this.remainingCount = this.maxCount - this.message.length;
            this.hasError = this.remainingCount < 0;
        },
        onReviewStarClicked(value){
            this.comment.rating = value
        },
        submitComment(){
            this.validateComment()
            //check if rating is a zero if it is tell the user to select a rating (1 star is the lowest)
            //submit comment ->check if email has already reviewed the company  
            //clear collapse 
            //close form
            //add comment to the comment array
            //done
        },
        validateComment(){
            if(this.message.length ==0 || this.message.length > 150){
                console.log("has error")
            }else if(this.comment.rating === 0){
                console.log("rating needs to be filled")
            }else{
                console.log("no error ")
                console.log(this.comment.rating)
            }
           
        }
        
    
    }

}
</script>

<style>
.submitReview{
    background-color: #f8951d !important;
    border-style:none !important;
}
.submitReview:hover{
    background-color: #f8b21d !important;
}
.test {
    display: inline-block;
}
.reviewButton{
    display: inline !important;
     background-color: #f8951d !important;
    border-style:none !important;
}


</style>
