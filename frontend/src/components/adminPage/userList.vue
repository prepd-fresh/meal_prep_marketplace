<template>
<div>
    <h1>All Users {{this.newUsers}}</h1>
    <b-table-simple responsive class="table">
        <b-thead>
            <tr>
                <td>
                    <strong>Email</strong>
                </td>
                <td>
                    <strong>Name</strong>
                </td>
                <td>
                    <strong>Role</strong>
                </td>
                <td>
                    <strong>Delete</strong>
                </td>
            </tr>
        </b-thead>
        <tbody>
            <tr v-for="(user, index) in users" v-bind:key="index.id">
                <td>
                    <p>{{user.email}}</p>
                </td>
                <td>
                    <p>{{user.name}}</p>
                </td>
                <td>
                    <p>{{user.role}}</p>
                </td>
                <td>
                    <BIconTrash class="delete" scale="1.4" v-on:click="deleteUser(user._id)" />
                </td>
            </tr>
        </tbody>
    </b-table-simple>
</div>
</template>

<script>
var API_URL = "http://localhost:3000/api/allusers";
var API_DELETE_USER_URL = "http://localhost:3000/api/deleteuser"
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
</style>
