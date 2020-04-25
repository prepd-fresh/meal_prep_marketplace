<template>
<div class="container">
    <div class="row">
        <h1>All Users {{this.newUsers}}</h1>
    </div>
    <div class="row">
        <b-table-simple responsive hover striped class="ml-0">
            <b-thead>
                <b-tr>
                    <b-th colspan="1">Email</b-th>
                    <b-th colspan="1">Name</b-th>
                    <b-th colspan="1">Role</b-th>
                    <b-th colspan="1">Delete</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(user, index) in users" v-bind:key="index.id">
                    <b-td>{{user.email}}</b-td>
                    <b-td>{{user.name}}</b-td>
                    <b-td>{{user.role}}</b-td>
                    <b-td>
                        <b-button class="d-flex" variant="outline-danger" @click="deleteUser(user._id)">
                            <i class="material-icons">delete</i>
                        </b-button>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</div>
</template>

<script>
var API_URL = "https://prepdmeals.ca:3000/api/allusers";
var API_DELETE_USER_URL = "https://prepdmeals.ca:3000/api/deleteuser"
export default {
    data() {
        return {
            users:'',
            newUsers: this.newAdmin
        };
    },
    props:["newAdmin"],
    created: function () {
        this.$http
            .get(API_URL)
            .then(response => {
                this.users = response.data;
            })
            .catch(error => {
                console.log(error.response);
            });
    },
    methods: {
        deleteUser: function (id) {
            this.$http.post(
                API_DELETE_USER_URL, {
                    userID: JSON.stringify(id)
                }, {
                    headers: {
                        Authorization: "Bearer " + this.$cookie.get("Auth")
                    }
                }
            ).then(response => {
                if (response.data.message === "true") {
                    const index = this.users.findIndex(user => user._id === id)
                    if (~index) {
                        this.makeToast()
                        this.users.splice(index, 1)
                    }
                }
            })
        },
        makeToast(append = false, ) {
            this.$bvToast.toast(`deleted User successfuly  `, {
                title: "DELETION DONE",
                autoHideDelay: 5000,
                appendToast: append,
                variant: "danger"
            })
        },

    }
};
</script>

<style>

    .ml-0.table-responsive table{
        margin-left: 0;
    }
</style>
