<template>
  <div>
      <section>
            <h3 class="is-size-3 has-text-danger">Login to Yelp</h3>
            <h3 class="is-size-4">Already On Yelp <a><nuxt-link to="/signup">Login Now</nuxt-link></a></h3>
            <h3>By continuing, you agree to <a>Yelp’s</a> Terms of Service and acknowledge <a>Yelp’s</a> Privacy Policy.</h3>

            <b-field label="Email">
                <b-input type="email" maxlength="30" v-model="email" required></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password" maxlength="30" password-reveal v-model="password" required></b-input>
            </b-field>
            <a><nuxt-link to="/forgot">Forgot Password ?</nuxt-link></a>

            <b-field>
                <b-button type="is-danger" class="loginbtn is-rounded" @click="login()">Login</b-button>
            </b-field>

            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>

     </section>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'
export default {
     name:'loginform',
     data(){
         return{
             email:'',
             password:'',
             isLoading: false,
             isFullPage: true,
         }
     },
     methods:{
         login(){
            
            
             firebase
             .auth()
             .signInWithEmailAndPassword(this.email,this.password)
             .then(()=>{
                 this.isLoading = false 
                  this.$buefy.notification.open({
                    message: 'Logged In',
                    type: 'is-success'
                    })

                    this.$router.push('/success')
             })
             .catch((err)=>{
                this.$buefy.notification.open({
                            message: 'Error message from database.ref'+ err.message,
                            type: 'is-warning'
                            })
             })
            
            
         }
     }
}
</script>

<style>
.loginbtn{
    margin-top:1rem;
    padding:0 2rem;
}
</style>