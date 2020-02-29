<template>
  <div>
      <section>
            <h3 class="is-size-3 has-text-danger">Sign Up for Yelp</h3>
            <h3 class="is-size-4">Connect with great local businesses</h3>
            <h3>By continuing, you agree to <a>Yelp’s</a> Terms of Service and acknowledge <a>Yelp’s</a> Privacy Policy.</h3>
            <b-field label="Name">
                <b-input type="text" v-model="name"></b-input>
            </b-field>

            <b-field label="Email" :type="emailvalid" :message="emailmessage">
                <b-input type="email" maxlength="30" v-model="email"></b-input>
            </b-field>

            <b-field label="Username" :type="usernamevalid" :message="usernamemessage">
                <b-input type="text" maxlength="30" v-model="username"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password" minlength="6" v-model="password" password-reveal></b-input>
            </b-field>

            <b-field label="Confirm Password" :type="passwordmatch" :message="passwordmatchmessage">
                <b-input type="password" minlength="6" v-model="confirmpassword" required></b-input>
            </b-field>

            <div class="field">
            <b-checkbox v-model="iAgree">I Agree To The Terms And Conditions</b-checkbox>
            </div>

            <b-field>
                <b-button type="is-danger" class="is-rounded" @click="signup()">Signup</b-button>
            </b-field>

            <!-- <b-notification
            type="is-warning"
            has-icon
            aria-close-label="Close notification"
            role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
            </b-notification>  -->
            
            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
        
     </section>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'
export default {
   name:'signupform',
   computed:{
       emailvalid(){
           if(this.email == '')
           {
             return 'is-danger'
           }else{
               return ''
           }
       },
       emailmessage(){
          if(this.email == '')
          {
              return 'this field is required'
          }
       },
       usernamevalid(){
           if(this.username == '')
           {
               return 'is-danger'
           }else{
               return 'is-success'
           }
       },
       usernamemessage(){
           if(this.username == ''){
              return 'Username is required'
           }else{
               return 'Username is unique'
           }
       },
       passwordmatch(){
           if(this.password === this.confirmpassword && this.password !== '')
           {
               return 'is-success'
           }else{
               return 'is-danger'
           }
       },
       passwordmatchmessage(){
           if(this.password === this.confirmpassword && this.password !== '')
           {
               return 'Matched'
           }else{
               return 'The Passwords does not match'
           }
       }
   },
   data(){
       return{
         isLoading: false,
         isFullPage: true,
         name:'',
         email:'',
         username:'',
         password:'',
         confirmpassword:'',
         iAgree:false
       }
   },
   methods:{
       signup(){
           if(!this.iAgree){
              this.$buefy.notification.open({
                    duration: 5000,
                    message: `Please Agree Terms and Conditions First`,
                    position: 'is-bottom-right',
                    type: 'is-danger',
                    hasIcon: true
                })
           }else{

              
                 firebase
                 .auth()
                 .createUserWithEmailAndPassword(this.email,this.password)
                 .then((user)=>{
                  console.log(user.user.displayName,user.user.email,user.user.uid)
                    firebase.database().ref('users/'+user.user.uid).set({
                        name:this.name,
                        email:this.email,
                        username:this.username,
                        password:this.password,
                        createdOn:Date(),
                    }).catch((err) => {
                         this.$buefy.notification.open({
                            message: 'Error message from database.ref'+ err.message,
                            type: 'is-warning'
                            })
                    })
                     this.$buefy.notification.open({
                    message: 'User Successfully Created',
                    type: 'is-success'
                    })


                
                 })
                 .catch((err) => {
                    this.$buefy.notification.open({
                    message:  'error message from creating user'+err.message,
                    type: 'is-warning'
                    })
                    
                     })
               
            
              
           }
          
       }
   }
}
</script>

<style>

</style>