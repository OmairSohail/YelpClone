<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'
import {mapMutations} from 'vuex'
export default {
      computed:{
        user(){
          return this.$store.state.user
        }
      },
      methods:{
         ...mapMutations({
           setuser:'user/setUser'
         })
      },
      mounted(){
         this.$nextTick(()=>{ 
            firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              const userData = {
                id:user.uid,
                name:user.displayName,
                email:user.email
              }
             
             
               console.log('user logged in ',user.email)
               console.log()
            }else{
               console.log('notlog in ')
            }
        })
          })
       
      }
}
</script>

<style>
*{
  font-family: 'Montserrat', ;
}
</style>