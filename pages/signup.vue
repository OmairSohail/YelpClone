<template>
  <div class="signup">
    <div class="container-fluid has-background-danger center">
        <img src="../assets/logo.png" alt="" width="100" height="100"/>
    </div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <section>
            <h3 class="is-size-3 has-text-danger">Sign Up for Yelp</h3>
            <h3 class="is-size-4">Connect with great local businesses</h3>
            <h3>By continuing, you agree to <a>Yelp’s</a> Terms of Service and acknowledge <a>Yelp’s</a> Privacy Policy.</h3>
            <b-field label="Name">
                <b-input type="text"></b-input>
            </b-field>

            <b-field label="Email">
                <b-input type="email" maxlength="30"></b-input>
            </b-field>

            <b-field label="Username">
                <b-input type="text" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password" maxlength="30" password-reveal></b-input>
            </b-field>

            <b-field label="Select a date">
                <b-datepicker
                    :show-week-number="showWeekNumber"
                    placeholder="Click to select..."
                    icon="calendar-today">
                </b-datepicker>
            </b-field>

            <b-field>
                <b-button type="is-danger" class="is-rounded">Signup</b-button>
            </b-field>
     </section>
     
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
export default {
   name:'signup'
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