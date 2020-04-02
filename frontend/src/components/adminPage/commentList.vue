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
        </tr>
    </tbody>
    </b-table-simple>
</template>

<script>
var API_URL = "http://localhost:3000/api/allCommentsAdmin"
export default {
    data(){
        return{
            allComments:""
        }
    },
    created: function(){
        this.$http.get(API_URL)
        .then(response =>{
            this.allComments = response.data
        })
        .catch(error =>{
            console.log(error.response)
        })
    }
}
</script>

<style>

</style>
