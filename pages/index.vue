<template>
<div>
<section class="hero is-fullheight-with-navbar">
  <div class="hero-head">
    <div class="container">
      <b-navbar class="navbar">
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
    
  </div>
  <div class="hero-body">
    <div class="container center">
     <img src="../assets/logo.png" width="150" height="200"/>
     <b-field>
            <b-select placeholder="Select a category" icon="account">
                <optgroup label="Black Sails">
                    <option value="flint">Flint</option>
                    <option value="silver">Silver</option>
                    <option value="vane">Vane</option>
                    <option value="billy">Billy</option>
                    <option value="jack">Jack</option>
                </optgroup>

                <optgroup label="Breaking Bad">
                    <option value="heisenberg">Heisenberg</option>
                    <option value="jesse">Jesse</option>
                    <option value="saul">Saul</option>
                    <option value="mike">Mike</option>
                </optgroup>

                <optgroup label="Game of Thrones">
                    <option value="tyrion-lannister">Tyrion Lannister</option>
                    <option value="jamie-lannister">Jamie Lannister</option>
                    <option value="daenerys-targaryen">Daenerys Targaryen</option>
                    <option value="jon-snow">Jon Snow</option>
                </optgroup>
            </b-select>         
      </b-field>
      <div class="categories">
       <b-navbar-item href="#">
                Plumbers
            </b-navbar-item>
            <b-navbar-item href="#">
                Restaurants
            </b-navbar-item>
            <b-navbar-dropdown label="Home Services">
                <b-navbar-item>
                   <nuxt-link to="/about">Air Conditioning & Cleaning </nuxt-link>
                </b-navbar-item>
                <b-navbar-item>
                   <nuxt-link to="/contractors">Contractors </nuxt-link>
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item href="#">
                Delivery
            </b-navbar-item>
      </div>
            
    
    </div>

  </div>
</section>
<section class="hero is-medium is-danger is-bold">
  <div class="hero-head">
    <h3 class="is-size-4 has-text-white-ter has-text-centered">Find the Best Businesses in Town</h3>
  </div>
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128">
                <img src="../assets/shirts.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <p class="is-size-4">Dry Cleaning</p>
            </div>
          </div>
        </div>
         <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128">
                <img src="../assets/shirts.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <p class="is-size-4">Dry Cleaning</p>
            </div>
          </div>
        </div>
         <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128">
                <img src="../assets/shirts.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <p class="is-size-4">Dry Cleaning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero{
  /* background-image: url("../assets/background.jpg"); */
  /* background:rgba(255,0,0,0.3); */
  
}
.hero-head{
  padding:1rem;
}

.center{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.center > * {
  padding:0.5rem;
}

.categories{
  display:flex;
  flex-direction:row;
}
</style>