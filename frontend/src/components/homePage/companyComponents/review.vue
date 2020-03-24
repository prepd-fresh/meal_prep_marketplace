<template>
<div>
    <h1>Reviews</h1>
    <b-button v-b-toggle.collapse-1 variant="primary">Leave a review</b-button>
    <b-collapse id="collapse-1" class="mt-2">
        <b-card>
            <div>
                <h5 style="display: inline;">Rating:</h5>
                <test :grade="0" style="display: inline;" />
                <b-form-textarea id="textarea" v-model="message" placeholder="Enter review..." rows="3" max-rows="6" v-on:keyup="countdown"></b-form-textarea>

                <pre class="mt-3 mb-0"  v-bind:class="{'text-danger': hasError }" >Charcters left: {{remainingCount}}</pre>

            </div>
            <b-button class="submitReview">Submit Review </b-button>
        </b-card>
    </b-collapse>
    <h2>All existing revies here</h2>
</div>
</template>

<script>
import test from "./rating"
export default {
    data() {
        return {
            maxCount: 150,
            remainingCount: 150,
            message: '',
            hasError: false
        }
    },
    components: {
        test
    },
    methods:{
        countdown:function(){
            this.remainingCount = this.maxCount - this.message.length;
            this.hasError = this.remainingCount < 0;
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
</style>
