<template>
  <div>
      <!-- BREADCRUMB -->
<div class="container">
    <nav class="breadcrumb is-right" aria-label="breadcrumbs">
     <ul>
        <li><a href="#"><nuxt-link to="/success">Home</nuxt-link></a></li>
        <li class="is-active"><a href="#"><nuxt-link to="ViewListings">Listings</nuxt-link></a></li>
     </ul>
    </nav>
</div>
<!-- BREADCRUMB ENDS -->
  </div>
</template>

<script>
export default {
   layout:'successlayout'
}
</script>

<style>

</style>