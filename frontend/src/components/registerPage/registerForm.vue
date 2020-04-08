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
          v-model="form.email"
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
          v-model="form.name"
          required
          placeholder="Enter name"
          :state="namestate"
          trim
        ></b-form-input>
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
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
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
          type="password"
          :state="passwordCheckerState"
          @keydown.native.space.prevent
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="buttonSubmit">Register</b-button>
    </b-form>
  </div>
</template>

<script>
 const API_URL = 'http://localhost:3000/api/register'
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
  methods:{
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
    onSubmit(evt){    
      evt.preventDefault()
      this.$http
        .post(API_URL, {
          newUser: JSON.stringify(this.form)
        }).then(response =>{
          console.log(response.data.message)
            if(response.data.message === "added"){
              this.errorEmail = false;
              this.$router.push('/login')
            }else if(response.data.message ==="emailTaken"){
              this.errorEmail = true;
            }else{
              alert("unreachable")
            }
            
        })
    }
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
      if (this.passwordChecker.length ===0) {
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