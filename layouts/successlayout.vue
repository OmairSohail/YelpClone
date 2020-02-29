<template>
  <div>
    <navbar2/>
    <button class="button" @click="increment()">Increment</button>
    <div class="">{{this.$store.state.Counter}}</div>
    <nuxt/>
  </div>
</template>

<script>
import navbar2 from '../components/successnavbar'
export default {
    components:{
         navbar2
    },
    methods:{
        increment(){
            this.$store.commit('index/Increment')
        }
    }
}
</script>

<style>

</style>