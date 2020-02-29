<template>
  <div>
<!-- BREADCRUMB -->
<div class="container">
    <nav class="breadcrumb is-right" aria-label="breadcrumbs">
     <ul>
        <li><a href="#"><nuxt-link to="/success">Home</nuxt-link></a></li>
        <li class="is-active"><a href="#"><nuxt-link to="BussinessListings">BussinessListings</nuxt-link></a></li>
     </ul>
    </nav>
</div>
<!-- BREADCRUMB ENDS -->

<!-- Site Submission Area -->
<div class="container">
<template>
    <section>
        <b-field label="Bussiness Name">
            <b-input></b-input>
        </b-field>

        <b-field label="Your Listing Address">
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

        <b-field label="Website Url (Optional)">
            <b-input></b-input>
        </b-field>

         <b-field label="Full Address / Bussiness Location">
            <b-input></b-input>
        </b-field>

         <b-field label="About Us">
            <b-input maxlength="300" type="textarea"></b-input>
        </b-field> 

         <b-field label="Upload Image">
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
          <br>
         <b-button type="is-light">Save & Request A Review</b-button>
         <b-button type="is-info">Save Only</b-button>
         <br>
         <br>
         <b-button type="is-info">Submit</b-button>
         <b-button type="is-danger">Cancel</b-button>
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
         dropFiles: [],
         isOpen: 0,
                collapses: [
                {
                    title: 'Title 1',
                    text: 'Text 1'
                },
                {
                    title: 'Title 2',
                    text: 'Text 2'
                },
                {
                    title: 'Title 3',
                    text: 'Text 3'
                }
                ],
                 Language:[
                  'English',
                  'French',
                  'Chinese'
                ]
     }
   },
   methods:{
     deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            }
   }
}
</script>

<style>

</style>