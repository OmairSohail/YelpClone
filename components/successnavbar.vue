<template>
  <div class="">
    <b-navbar class="navbar container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <!-- <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Your Bussinesses
            </b-navbar-item>
        </template> -->

        <template slot="end">
            <b-navbar-item tag="div">
                <!-- <div class="buttons">
                    <button class="button is-danger" @click="logout()">Signout</button>
                </div> -->

                <div v-for="u in user" :key="u">{{u.email}}</div>
                <b-navbar-dropdown label="">
                    <b-navbar-item>
                       <nuxt-link to="success/Dashboard"> Dashboard </nuxt-link>
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        My Directories
                    </b-navbar-item>
                    <hr class="navbar-divider">
                    <b-navbar-item @click="logout()">
                         SignOut
                    </b-navbar-item>
                </b-navbar-dropdown>
            </b-navbar-item>
        </template>
    </b-navbar>
 </div>
</template>

<script>
import firebase from '../plugins/firebase'
export default {
    name:'navbar2',
    props:['user'],
    methods:{
         test(){
             console.log(this.user)
         },
         logout(){
           firebase.auth().signOut().then(()=>{
                this.$router.push('/login')
           }).catch(err => console.log(err.message))

        }
    }
}
</script>

<style scoped>
.navbar{
    padding:1rem 0;
    border-bottom:0.5px grey solid;
}
</style>