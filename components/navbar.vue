<template>
  <div class="">
      <b-navbar class="navbar is-dark">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="info">
                <b-navbar-item>
                   <nuxt-link to="/about"> About </nuxt-link>
                </b-navbar-item>
                <b-navbar-item>
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                  
                    <a class="button is-grey">
                       <nuxt-link to="/signup"> Sign up </nuxt-link>
                    </a>
                  
                  
                    <a class="button is-secondary is-outlined">
                      <nuxt-link to="/login">
                        Log in
                        </nuxt-link>
                    </a>
                  
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
   name:'navbar'
}
</script>

<style>

</style>