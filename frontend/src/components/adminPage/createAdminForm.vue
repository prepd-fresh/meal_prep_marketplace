<template>
<b-modal id="modal-1" v-bind:hide-footer="true" hide-title="true">
    <div class="containment">
        <h1 class="header">Register Admin Account</h1>
        <b-form-group class="label" id="email-input-label" label="Email address:" label-for="email-input">
            <b-form-input id="email-input" v-model="form.email" type="email" required placeholder="Enter email" trim></b-form-input>
            <div v-show="errorEmail">
                <p class="errorMessage">Email is taken</p>
            </div>
        </b-form-group>

        <b-form-group class="label" id="input-label-name" label="Enter Name:" label-for="name-input" :invalid-feedback="invalidFeedbackName" :state="namestate">
            <b-form-input id="name-input" v-model="form.name" required placeholder="Enter name" :state="namestate" trim></b-form-input>
        </b-form-group>

        <b-form-group class="label" id="input-label-password" label="Password:" label-for="password-input" :invalid-feedback="invalidFeedbackPassword" :state="passwordstate">
            <b-form-input id="password-input" v-model="form.password" type="password" required placeholder="Enter password" :state="passwordstate" @keydown.native.space.prevent></b-form-input>
        </b-form-group>

        <b-form-group class="label" id="input-label-password-checker" label="Re Enter Password:" label-for="password-checker-input" :invalid-feedback="invalidFeedbackPasswordChecker" :state="passwordCheckerState">
            <b-form-input id="password-checker-input" v-model="passwordChecker" required placeholder="re-enter password" type="password" :state="passwordCheckerState" @keydown.native.space.prevent></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="buttonSubmit" v-on:click="submit">Add Admin</b-button>
    </div>
</b-modal>
</template>

<script>
const API_URL = 'https://prepdmeals.ca:3000/api/registerAdmin'
export default {

    data() {
        return {
            passwordChecker: "",
            form: {
                password: "",
                name: "",
                email: "",
            },
            errorUsername: false,
            errorEmail: false
        }

    },
    methods: {
        validateForm() {
            if (this.form.name.length < 4) {
                return false;
            } else if (this.form.password !== this.passwordChecker) {
                return false;
            } else if (this.form.username.length < 5) {
                return false;
            } else if (this.form.password < 7) {
                return false;
            } else {
                return true;
            }
        },
        submit() {
            this.$emit("addedAdmin", "true")
            console.log(API_URL)
            this.$http
                .post(API_URL, {
                    newAdmin: JSON.stringify(this.form)
                },{
                    headers: {
                        Authorization: "Bearer " + this.$cookie.get("Auth")
                    }
                }).then(response => {
                    console.log(response.data.message)
                    if (response.data.message === "added") {
                        this.errorEmail = false;
                        this.$emit("addedAdmin", "true")
                        this.$bvModal.hide('modal-1')
                        this.makePassToast()
                    } else if (response.data.message === "emailTaken") {
                        this.errorEmail = true;
                    } else {
                        alert("unreachable")
                    }

                })
        },
            makePassToast(append = false, ) {
            this.$bvToast.toast(`Created Admin Successfully`, {
                title: "Created successfully",
                autoHideDelay: 5000,
                appendToast: append,
                variant: "success"
            })
        },
    },
    computed: {
        //Name error checking done
        namestate() {
            return this.form.name.length >= 4 ? true : false;
        },
        invalidFeedbackName() {
            if (this.form.name.length === 0) {
                return "cannot be blank";
            }
            return "cannot be blank";
        },
        //password
        passwordstate() {
            if (this.form.password.length >= 7) {
                return true;
            } else {
                return false;
            }
        },
        invalidFeedbackPassword() {
            if (this.form.password.length > 7) {
                return " ";
            } else if (this.form.password.length > 0) {
                return "Password needs to be longer";
            } else {
                return "Cannot be empy";
            }
        },
        //password checker
        passwordCheckerState() {
            if (this.passwordChecker.length === 0) {
                return false;
            } else if (this.form.password === this.passwordChecker) {
                return true;
            } else {
                return false;
            }
        },
        invalidFeedbackPasswordChecker() {
            if (this.form.password !== this.passwordChecker) {
                return "Passwords do not match";
            } else if (this.passwordChecker.length == 0) {
                return "cannot be empty";
            } else {
                return "cannot be empty";
            }
        }
    }
};
</script>

<style>
.containment {
    margin: 80px !important;
}
</style>
