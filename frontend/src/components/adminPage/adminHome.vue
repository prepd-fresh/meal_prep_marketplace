<template>
<div>
    <div>
        <b-button v-b-modal.modalPopover class="adminButtons">Add company</b-button>
        <b-button v-b-modal.modal-1 class="adminButtons">Create Admin</b-button>
        <createAdmin @addedAdmin="onAddAdmin" />
        <createCompany @addedCompany="onAddCompany" />
        <button v-on:click="reloaderTest">Test Reloader</button>
    </div>
    <div class="tabs">
        <b-tabs content-class="mt-3" v-if="reloaderUser">
            <b-tab title="User List" active>
                <userList />
            </b-tab>
            <b-tab title="Company List">
                <companyList v-if="reloaderCompany" />
            </b-tab>
            <b-tab title="Comments">
                <commentList />
            </b-tab>
        </b-tabs>
    </div>

</div>
</template>

<script>
import userList from "./userList"
import companyList from "./companyList"
import commentList from './commentList'
import createAdmin from './createAdminForm'
import createCompany from './createCompanyForm'
export default {
    data() {
        return {
            reloaderUser: true,
            reloaderCompany: true,
        }
    },
    components: {
        userList,
        companyList,
        commentList,
        createAdmin,
        createCompany
    },
    beforeCreate: function () {
        console.log(this.$cookie.get("role"))
        if (this.$cookie.get("Auth") === null || this.$cookie.get("role") === "user") {
            this.$router.push("/login")
        }

    },
    methods: {
        reloaderTest: function () {
            this.reloaderUser = false;
            this.$nextTick(() => {
                this.reloaderUser = true;
                console.log("timer")
            })
        },
        onAddAdmin: function (value) {
            console.log("add Add admin: ", value)
            if (value === "true") {
                console.log("inside")
                this.reloaderTest()
            }
        },
        onAddCompany: function (value) {
            console.log("add Company Value: ", value)
        },

    },

}
</script>

<style>
.tabs {
    margin-top: 30px;
}

.companyForm {
    padding: 10%;
}

#custom-select {
    width: 10% !important;
}

.adminButtons {
    margin: 20px;
    background-color: #f8951d !important;
    border-style: none !important;
}

.adminButtons:hover {
    background-color: #f8b21d !important;
}
</style>
