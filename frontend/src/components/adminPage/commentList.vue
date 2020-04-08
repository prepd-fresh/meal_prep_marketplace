<template>
<b-table-simple responsive class="table">
    <b-thead>
        <tr>
            <td>
                <strong>Email</strong>
            </td>
            <td>
                <strong>Company Name</strong>
            </td>
            <td>
                <strong>Content</strong>
            </td>
            <td>
                <strong>Date</strong>
            </td>
            <td>
                <strong>Rating</strong>
            </td>
            <td>
                <Strong>Delete</Strong>
            </td>
        </tr>
    </b-thead>
    <tbody>
        <tr v-for="(comment, index) in allComments" v-bind:key="index.id">
            <td>
                <p>{{comment.email}}</p>
            </td>
            <td>
                <p>{{comment.companyName}}</p>
            </td>
            <td>
                <p>{{comment.content}}</p>
            </td>
            <td>
                <p>{{comment.date}}</p>
            </td>
            <td>
                <p>{{comment.rating}}</p>
            </td>
            <td>

                <BIconTrash class="delete" scale="1.4" v-on:click="deleteComment(comment._id)"/>

            </td>
        </tr>
    </tbody>
</b-table-simple>
</template>

<script>
var API_URL = "http://localhost:3000/api/allCommentsAdmin"
var API_URL_DELETE = "http://localhost:3000/api/deleteComment"
import {
    BIconTrash,

} from 'bootstrap-vue'
export default {
    data() {
        return {
            allComments: ""
        }
    },
    created: function () {
        this.$http.get(API_URL)
            .then(response => {
                this.allComments = response.data
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    methods:{
        deleteComment:function(id){
            this.$http.post(
                API_URL_DELETE,{
                    commentID:JSON.stringify(id)
                }
            ).then(response =>{
                if(response.data.message === "true"){
                    const index = this.allComments.findIndex(comments => comments._id === id)
                    if(~index){
                        this.makeToast()
                        this.allComments.splice(index,1)
                    } 
                }
            })
        },
        makeToast(append = false, ){
        this.$bvToast.toast(`deleted comment successfuly  `, {
          title:"DELETE DONE",
          autoHideDelay: 5000,
          appendToast: append,
          variant:"danger"
        }) 
        }
    },
    components:{
        BIconTrash
    }
}
</script>

<style>

</style>
