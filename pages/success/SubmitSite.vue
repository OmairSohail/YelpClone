<template>
  <div>
     <!-- BREADCRUMB -->
<div class="container">
    <nav class="breadcrumb is-right" aria-label="breadcrumbs">
     <ul>
        <li><a href="#"><nuxt-link to="/success">Home</nuxt-link></a></li>
        <li class="is-active"><a href="#"><nuxt-link to="SubmitSite">Submit Website</nuxt-link></a></li>
     </ul>
    </nav>
</div>
<!-- BREADCRUMB ENDS -->

<!-- Site Submission Area -->
<div class="container">
<template>
    <section>
        <b-field label="Site URL" expanded>
            <b-input></b-input>
        </b-field>

        <b-field label="Site Title">
            <b-input></b-input>
        </b-field>
        <b-field label="Site Description">
            <b-input maxlength="300" type="textarea"></b-input>
        </b-field> 
         
         <b-field label="Feed Address(Optional)" expanded>
            <b-input></b-input>
        </b-field>

        <b-field label="Category">
            <b-select placeholder="Select a character" icon="account">
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

         <b-field label="Language">
            <b-select placeholder="Select a name">
                <option
                    v-for="l in Language"
                    :value="l"
                    :key="l"
                    >
                    {{ l }}
                </option>
            </b-select>
        </b-field> 

         <b-field label="Listing Type">
            <b-select placeholder="Select a Type" required>
                <option value="flint">Blog</option>
                <option value="silver">Website</option>
            </b-select>
        </b-field>
          <br>
         <b-field> 
         <b-button type="is-info">Submit Website</b-button>
         </b-field>
    </section>
</template>
</div>
<!-- Site Submission Area -->
  </div>
</template>

<script>
export default {
   layout:'successlayout',
   data(){
      return{
        Language:[
           'English',
           'French',
           'Chinese'
        ]
      }
   }
}
</script>

<style>

</style>