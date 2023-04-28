<template>
  <div id="app">
    <Navbar :logado="logado"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';

export default{
  components: {
    Navbar
  },
  data(){
    return{
    }
  },
  computed: {
    logado(){
      return localStorage.getItem('token') != null ? true:false
    }
  }
}

</script>
