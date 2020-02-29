<template>
  <div>
      
  </div>
</template>

<script>
import firebase from '../../plugins/firebase'

export default {
    layout: 'successlayout'
    ,
    components:{
       
    },
    methods:{
        logout(){
           firebase.auth().signOut().then(()=>{
                this.$router.push('/login')
           }).catch(err => console.log(err.message))
        }
    }
}
</script>

<style>

</style>