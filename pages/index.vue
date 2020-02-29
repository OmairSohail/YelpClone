<template>
<div>
<section class="hero is-fullheight-with-navbar">
  <div class="hero-head">
    <div class="container">
      <navbar/>
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
       <b-navbar-item href="#" class="has-text-white">
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
<section class="hero is-small is-danger is-bold">
  <div class="hero-head">
    <h3 class="is-size-4 has-text-white-ter has-text-centered">Find the Best Businesses in Town</h3>
  </div>
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image ">
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
              <figure class="image ">
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
              <figure class="image ">
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
              <figure class="image ">
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
<section class="hero is-medium is-light">
  <div class="hero-head">
    <p class="is-size-4 has-text-danger has-text-centered">Browse Businesses by Category</p>
  </div>
  <div class="hero-body">
    <div class="columns is-centered">
      <div class="column is-2">
        <div class="card">
          <div class="card-image">
            <img src="../assets/restuarant.png" alt="">
          </div>
          <div class="card-content">
            <p>Restaurants</p>
          </div>
        </div>
      </div>
       <div class="column is-2">
        <div class="card">
          <div class="card-image">
            <img src="../assets/service.png" alt="">
          </div>
          <div class="card-content">
            <p>Services</p>
          </div>
        </div>
      </div>
       <div class="column is-2">
        <div class="card">
          <div class="card-image">
            <img src="../assets/cap.png" alt="">
          </div>
          <div class="card-content">
            <p>garments</p>
          </div>
        </div>
      </div>
       
    </div>
     <div class="columns is-centered">
      <div class="column is-2">
        <div class="card">
          <div class="card-image">
            <img src="../assets/restuarant.png" alt="">
          </div>
          <div class="card-content">
            <p>Restaurants</p>
          </div>
        </div>
      </div>
       <div class="column is-2">
        <div class="card">
          <div class="card-image">
            <img src="../assets/service.png" alt="">
          </div>
          <div class="card-content">
            <p>Services</p>
          </div>
        </div>
      </div>
       <div class="column is-2">
        <div class="card">
          <div class="card-image">
            <img src="../assets/cap.png" alt="">
          </div>
          <div class="card-content">
            <p>garments</p>
          </div>
        </div>
      </div>
       
    </div>
  </div>
</section>
</div>
</template>

<script>
import navbar from '../components/navbar'
export default {
      components:{
         navbar
      }
}
</script>

<style scoped>
.hero{
  background-image: url("https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/3780032cdbe6/assets/img/home/hero_photos/TaW5o-S7q8-QYkLTWtRYFw.jpg");
  background-position: center center;
  background-size:cover;
  
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
.card{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card:hover{
  cursor: pointer;
}
</style>