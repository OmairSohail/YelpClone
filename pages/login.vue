<template>
  <div class="login">
    <div class="container-fluid has-background-danger center">
        <img src="../assets/logo.png" alt="" width="100" height="100"/>
    </div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <loginform/>
         <div class="">
           <img src="../assets/signup_pic.png" height="100">
         </div>
            
     
      </div>
    </section>
    <footer class="footer">
        <div class="container">
            <div class="columns">
                <div class="column has-text-centered">
                   <ul class="">
                       <li class="is-size-5 has-text-danger">About</li>
                       <li><nuxt-link to="/about">About Yelp</nuxt-link></li>
                       <li><nuxt-link to="/careers">Careers</nuxt-link></li>
                       <li><nuxt-link to="/press">Press</nuxt-link></li>
                       <li><nuxt-link to="/investorRelation">Investor Relations</nuxt-link></li>
                       <li><nuxt-link to="contentGuidelines">Content Guidelines</nuxt-link></li>
                       <li><nuxt-link to="/termsofservices">Terms of Services</nuxt-link></li>
                   </ul>
                </div>
                 <div class="column has-text-centered">
                   <ul class="">
                       <li class="is-size-5 has-text-danger">Discover</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                   </ul>
                </div>
                 <div class="column has-text-centered">
                   <ul class="">
                       <li class="is-size-5 has-text-danger">Yelp for Bussiness owners</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                   </ul>
                </div>
                 <div class="column has-text-centered">
                   <ul class="">
                       <li class="is-size-5 has-text-danger">Language</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                       <li>About</li>
                   </ul>
                </div>
            </div>
            <div class="copyrights has-text-centered">
                <p>Copyright © 2004–2020 Yelp Inc. <img src="../assets/logo.png" class="icon"> Yelp burst and related marks are registered trademarks of Yelp.</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import loginform from '../components/loginform'
export default {
   components:{
       loginform
   }
}
</script>

<style scoped>
.center{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:1rem;
}

.hero-body{
    display:flex;
    flex-direction: row;
    justify-content: center
}

.hero-body > * {
    padding:0 6rem;
}

.copyrights{
    margin-top:2rem;
}


</style>