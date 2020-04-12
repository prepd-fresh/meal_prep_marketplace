<template>
<div>
    <b-button v-b-toggle.collapse-1 variant="primary" class="reviewButton">Leave a review</b-button>
    <b-collapse id="collapse-1" class="mt-2">
        <b-card>
            <div>
                <h5>Rating:</h5>
                <reviewStars :grade="0" @starCount="onReviewStarClicked" />
                <b-form-textarea class="textArea" id="textarea" v-model="newComment.content" placeholder="Enter review..." rows="3" max-rows="6" v-on:keyup="countdown"></b-form-textarea>
                <pre class="mt-3 mb-0" v-bind:class="{'text-danger': hasError }">Charcters left: {{remainingCount}}</pre>

            </div>
            <b-button class="submitReview" v-on:click="submitComment">Submit Review </b-button>
        </b-card>
    </b-collapse>
    <h6 class="mt-4">Other Reviews</h6>
    <ul class="list" data-spy="scroll">
        <li class="reviewList mt-4 mb-2" v-for="(comment, index) in allComments" v-bind:key="index.id">
            <userReviews :review=comment />
        </li>
    </ul>
</div>
</template>

<script>
const API_URL = 'http://localhost:3000/api/allComments'
const API_URL_ADD_COMMENT = 'http://localhost:3000/api/addComment'
import reviewStars from "./rating"
import userReviews from './userReviews'
export default {
    data() {
        return {
            //comment: '',
            companyName: this.companyCurrentName,
            maxCount: 150,
            remainingCount: 150,
            hasError: false,
            allComments: '',
            //rating: 0,

            newComment: {
               companyName: this.companyCurrentName,
                rating: 0,
                email: '',
                content: '',
                date: '',
            }
        }
    },
    components: {
        reviewStars,
        userReviews
    },
    props: ['companyCurrentName'],

    created: function () {
        this.$http.post(API_URL, {
            companyName: JSON.stringify(this.companyCurrentName)
        }).then(response => {
            this.comment = this.companyCurrentName
            this.allComments = response.data
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })

    },
    methods: {
        countdown: function () {
            this.remainingCount = this.maxCount - this.newComment.content.length;
            this.hasError = this.remainingCount < 0;
        },
        onReviewStarClicked(value) {
            this.newComment.rating = value
        },
        validateComment() {
            if (this.newComment.content.length == 0 || this.newComment.content.length > 150) {
                return true
            } else if (this.comment.score === 0) {
                return false
            } else {
                return true
            }

        },
        submitComment() {
            //checks if user is logged in
            if (this.$cookie.get("Auth") === null) {
                alert("Please login")
                this.$router.push("/login")
            }

            if (this.validateComment() == true) {
                this.$http.post(API_URL_ADD_COMMENT, {
                    newComment: JSON.stringify(this.newComment)
                }, {
                    headers: {
                        Authorization: "Bearer " + this.$cookie.get("Auth")
                    }
                }).then(response => {
                    console.log(response.data.message)
                    if (response.data.message === "added") {
                        this.newComment.email = response.data.email
                        this.newComment.date = response.data.date
                        this.allComments.push(this.newComment)
                    }
                    if(response.data.message === "AlreadyCommented"){
                        //alert("you cannot comment on this company")
                        console.log("login")
                    }
                }).catch((error) => {
                    console.log(error.response)
                })
            }
        }
    },
}
</script>

<style>
.submitReview {
    background-color: #f8951d !important;
    border-style: none !important;
}

.submitReview:hover {
    background-color: #f8b21d !important;
}

.test {
    display: inline-block;
}

.reviewButton {
    display: inline !important;
    background-color: #f8951d !important;
    border-style: none !important;
}

.list {
    list-style-type: none;
    margin-right: 20px;
}
.reviewList{
    margin-top: 10px;
}
.textArea{
    margin-top:10px;
}
</style>
