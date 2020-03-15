  <template>
 <div >
    <b-form @submit.prevent="onSubmit" class="form"  >
      <h1 class="headerLogin">Please login to your Account</h1>
      <b-form-group
        class="label"
        id="email-input-label"
        label="Email:"
        label-for="email-input"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
        <div v-show="error"><p class= "errorMessage">Sorry Cant Login Please Check</p></div>
      </b-form-group>

      <b-form-group
        class="label"
        id="input-label-password"
        label="Password:"
        label-for="password-input"
        description="Keep your password secure."
      >
        <b-form-input
          id="password-input"
          v-model="form.password"
          type="password"
          required
          placeholder="password"
        ></b-form-input>
      </b-form-group>

      <div class="buttonGroup">
        <b-button type="submit" variant="primary" class="buttonSubmit">Login</b-button>
        <b-button class="buttonForgot" variant="danger">Forgot Login </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>

const API_URL ="http://localhost:3000/api/login"
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error:false
    };
  },
  methods:{ 
   onSubmit(evt){
          evt.preventDefault();
      this.$http
        .post(API_URL, {
          user: JSON.stringify(this.form)
        }).then(response =>{
            if(response.data.message === "true"){
              this.error = false;
            }else{
              this.error = true;
            }
            console.log(response)
        }).catch((error) =>{
          console.log(error.response)
        })
    },
  }
  
}
</script>

<style>
.buttonForgot {
  margin-left: 2%;
}
.form {
  margin-top: 8%;
  margin-left: 25%;
  margin-right: 25%;
  background-color: #fff !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5%;
}
.headerLogin {
  color: #f8951d;
}
.buttonSubmit{
  background-color: #f8951d !important;
  border: none !important;
}
.buttonForgot{
  border:none !important;
}
.buttonSubmit:hover{
  background-color: #f8b21d  !important;
}
.buttonForgot:hover{
   background-color: #DC143C  !important;
}
.label {
  color: #f8951d;
}
.errorMessage{
  size:4px;
  color: red;
}
@media only screen and (max-width: 600px) {
  .form{
    margin-top: 20%;
    margin-left: 3%;
    margin-right: 3%; 
  }
}

</style>