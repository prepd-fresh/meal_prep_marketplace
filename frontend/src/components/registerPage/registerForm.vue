<template>
  <div>
    <b-form @submit.prevent="onSubmit" class="form">
      <h1 class="header">Please Register for an Account</h1>

      <b-form-group
        class="label"
        id="email-input-label"
        label="Email address:"
        label-for="email-input"
      >
        <b-form-input
          id="email-input"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
          trim
        ></b-form-input>
        <div v-show="errorEmail">
          <p class="errorMessage">Email is taken</p>
        </div>
      </b-form-group>

      <b-form-group
        class="label"
        id="input-label-name"
        label="Enter Name:"
        label-for="name-input"
        :invalid-feedback="invalidFeedbackName"
        :state="namestate"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          required
          placeholder="Enter name"
          :state="namestate"
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="label"
        id="input-label-username"
        label="Enter username:"
        label-for="username-input"
        :invalid-feedback="invalidFeedbackUsername"
      >
        <b-form-input
          id="username-input"
          v-model="username"
          required
          placeholder="Enter username"
          :state="usernamestate"
          @keydown.native.space.prevent
        ></b-form-input>
        <div v-show="errorUsername">
          <p class="errorMessage">Username is taken</p>
        </div>
      </b-form-group>

      <b-form-group
        class="label"
        id="input-label-password"
        label="Password:"
        label-for="password-input"
        :invalid-feedback="invalidFeedbackPassword"
        :state="passwordstate"
      >
        <b-form-input
          id="password-input"
          v-model="password"
          required
          placeholder="Enter password"
          type:password
          :state="passwordstate"
          @keydown.native.space.prevent
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="label"
        id="input-label-password-checker"
        label="Re Enter Password:"
        label-for="password-checker-input"
        :invalid-feedback="invalidFeedbackPasswordChecker"
        :state="passwordCheckerState"
      >
        <b-form-input
          id="password-checker-input"
          v-model="passwordChecker"
          required
          placeholder="re-enter password"
          type:password
          :state="passwordCheckerState"
          @keydown.native.space.prevent
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="buttonSubmit">Register</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    data() {
    return {
      //variables
      passwordChecker: "",
      password: "",
      name: "",
      username: "",
      email: "",
      form: {},
      errorUsername: false,
      errorEmail: false
    }
   
  },
  methods:{
     validateForm() {
      if (this.name.length < 4) {
        return false;
      } else if (this.password !== this.passwordChecker) {
        return false;
      } else if (this.username.length < 5) {
        return false;
      } else if (this.password < 7) {
        return false;
      } else {
        return true;
      }
    },
    onSubmit(){
      alert("Register")
    }
  },
   computed: {
    //Name error checking done
    namestate() {
      return this.name.length >= 4 ? true : false;
    },
    invalidFeedbackName() {
      if (this.name.length === 0) {
        return "cannot be blank";
      }
      return "cannot be blank";
    },
    //Username error checking
    usernamestate() {
      if (this.username.length >= 5) {
        return true;
      }
      return false;
    },
    invalidFeedbackUsername() {
      if (this.username.length > 0) {
        return "username needs to be longer";
      } else if (this.username.length >= 6) {
        return " ";
      } else {
        return "cannot be blank";
      }
    },
    //password
    passwordstate() {
      if (this.password.length >= 7) {
        return true;
      } else {
        return false;
      }
    },
    invalidFeedbackPassword() {
      if (this.password.length > 7) {
        return " ";
      } else if (this.password.length > 0) {
        return "Password needs to be longer";
      } else {
        return "Cannot be empy";
      }
    },
    //password checker
    passwordCheckerState() {
      if (this.password === this.passwordChecker) {
        return true;
      } else if (this.passwordChecker.length <= 0) {
        return false;
      } else {
        return false;
      }
    },
    invalidFeedbackPasswordChecker() {
      if (this.password !== this.passwordChecker) {
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
.buttonForgot {
  margin-left: 2%;
}
.buttonSubmit {
  background-color: #f8951d !important;
  border: none !important;

}
.label {
  color: #fff;
}
.form {
  margin-top: 5%;
  margin-left: 20%;
  margin-right: 20%;
  background-color: #fff !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5%;
}
.label{
  color: #f8951d;
}
.header {
  color: #f8951d;
}
.errorMessage{
  color: red;
}
.buttonSubmit:hover{
  background-color: #f8b21d  !important;
}
@media only screen and (max-width: 600px) {
  .form{
    margin-top: 20%;
    margin-left: 3%;
    margin-right: 3%; 
  }
}
</style>