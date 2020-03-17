 <template>
<div>
    <h1>All Users</h1>
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
                </tr>
            </tbody>
    </b-table-simple>
</div>
</template>

<script>
var API_URL = "http://localhost:3000/api/allusers";
export default {
    data() {
        return {
            users: ""
        };
    },
    created: function () {
        this.$http
            .get(API_URL)
            .then(response => {
                this.users = response.data;
                console.log(this.users);
            })
            .catch(error => {
                console.log(error.response);
            });
    }
};
</script>

<style>
</style>
