<template>
  <div>
    <navbar2 :user="this.$store.state.user.user"/>
    <br>
    <div class="container">
 <div class="columns">
        <div class="column is-3">
                <aside class="menu">
                <p class="menu-label is-active">
                    Yelp Directory Submission
                </p>
                <ul class="menu-list">
                    <li><a><nuxt-link to="SubmitSite">Submit A Site</nuxt-link></a></li>
                    <li><a><nuxt-link to="ViewListings">Listings</nuxt-link></a></li>
                </ul>
                <p class="menu-label">
                    Bussiness Listings
                </p>
                <ul class="menu-list">
                    <li><a><nuxt-link to="BussinessListings">List Your Bussiness</nuxt-link></a></li>
                    <li><a><nuxt-link to="ViewBussinessListings">View Listings</nuxt-link></a></li>
                </ul>
                <p class="menu-label">
                    Articles
                </p>
                <ul class="menu-list">
                    <li><a><nuxt-link to="WriteArticles">Write Articles</nuxt-link></a></li>
                    <li><a><nuxt-link to="ViewArticles">View Articles</nuxt-link></a></li>
                </ul>
                <p class="menu-label">
                    Account
                </p>
                <ul class="menu-list">
                    <li><a><nuxt-link to="Profile">Profile Details</nuxt-link></a></li>
                </ul>
                </aside>
        </div>
        <div class="column">
          <nuxt/>
          <!-- <nuxt-child/> -->
        </div>
        <div class="column">
           <!-- <div class="container">
                    <h3 class="is-size-3">Your Profile Picture</h3>
                <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                </figure>
            </div>
                

            
            <template>
                <section>
                    <b-field>
                        <b-upload v-model="dropFiles"
                            multiple
                            drag-drop>
                            <section class="section">
                                <div class="content has-text-centered">
                                    <p>
                                        <b-icon
                                            icon="upload"
                                            size="is-large">
                                        </b-icon>
                                    </p>
                                    <p>Drop your files here or click to upload</p>
                                </div>
                            </section>
                        </b-upload>
                    </b-field>

                    <div class="tags">
                        <span v-for="(file, index) in dropFiles"
                            :key="index"
                            class="tag is-primary" >
                            {{file.name}}
                            <button class="delete is-small"
                                type="button"
                                @click="deleteDropFile(index)">
                            </button>
                        </span>
                    </div>
                </section>
            </template> -->
           
        </div>
    </div>
</div>
    
  </div>
</template>

<script>
import navbar2 from '../components/successnavbar'
import firebase from '../plugins/firebase'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){

    },
    components:{
         navbar2
    },
    computed: {
        ...mapState({
          
        })
    },
    methods:{
      ...mapMutations({
          set:'user/setUser'
      })        
    }
    ,
    mounted(){
         this.$nextTick(()=>{ 
            firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              const userData = {
                id:user.uid,
                name:user.displayName,
                email:user.email
              }
               this.set(userData)
               console.log('user logged in ',user.email)
            }else{
              this.set()
               console.log('notlog in ')
            }
        })
      })
    }
}
</script>

<style>

</style>