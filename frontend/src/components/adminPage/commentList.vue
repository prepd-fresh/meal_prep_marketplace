<template>
  <div class="container">
    <div class="row">
        <h1>All Comments</h1>
    </div>
    <div class="row">
      <b-table-simple striped responsive condensed class="ml-0">
        <b-thead>
          <tr>
            <b-th>Email</b-th>
            <b-th>Company Name</b-th>
            <b-th>Content</b-th>
            <b-th>Date</b-th>
            <b-th>Rating</b-th>
            <b-th>Delete</b-th>
          </tr>
        </b-thead>
        <tbody>
          <tr v-for="(comment, index) in allComments" v-bind:key="index.id">
            <td>{{comment.email}}</td>
            <td>{{comment.companyName}}</td>
            <td>{{comment.content}}</td>
            <td>{{comment.date}}</td>
            <td>{{comment.rating}}</td>
            <td>
              <b-button variant="outline-danger" @click="deleteComment(comment._id)">
                <i class="material-icons">delete</i>
              </b-button>
            </td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
var API_URL = "http://localhost:3000/api/allCommentsAdmin";
var API_URL_DELETE = "http://localhost:3000/api/deleteComment";
export default {
  data() {
    return {
      allComments: ""
    };
  },
  created: function() {
    this.$http
      .get(API_URL)
      .then(response => {
        this.allComments = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    deleteComment: function(id) {
      this.$http
        .post(API_URL_DELETE, {
          commentID: JSON.stringify(id)
        })
        .then(response => {
          if (response.data.message === "true") {
            const index = this.allComments.findIndex(
              comments => comments._id === id
            );
            if (~index) {
              this.makeToast();
              this.allComments.splice(index, 1);
            }
          }
        });
    },
    makeToast(append = false) {
      this.$bvToast.toast(`deleted comment successfuly  `, {
        title: "DELETION DONE",
        autoHideDelay: 5000,
        appendToast: append,
        variant: "danger"
      });
    }
  }
};
</script>

<style>
</style>
