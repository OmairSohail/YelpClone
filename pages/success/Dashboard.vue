<template>
  <div class="">
      <!-- BREADCRUMB -->
<div class="container">
    <nav class="breadcrumb is-right" aria-label="breadcrumbs">
  <ul>
    <li><a href="#"><nuxt-link to="/success">Home</nuxt-link></a></li>
    <li class="is-active"><a href="#"><nuxt-link to="Dashboard">Dashboard</nuxt-link></a></li>
  </ul>
</nav>
</div>


   
   

  </div>
</template>

<script>
export default {
    layout:'successlayout',
    data(){
        return{
           dropFiles: []
        }
    },
    methods: {
     deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            }
    }
}
</script>

<style scoped>

</style>
