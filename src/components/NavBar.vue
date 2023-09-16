<template>
  <b-navbar toggleable type="dark" variant="dark">
      <router-link to="/">
          <img src="@/assets/images/balanca.png" class="img-balanca" alt="balanca">
              Projeto Parceiro de Deus
      </router-link> 

      <router-link to ="/login" v-if="!logado">
        <b-button variant="outline-primary"> Sign In</b-button>
      </router-link>
      
      <router-link to ="/" v-if="logado">
        <b-button variant="outline-primary"> Logout</b-button>
      </router-link>
</b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{}
  },
  methods: {
  }
}
</script>

<style scoped>
.img-balanca {
width: 35px;
height: 35px;
}
</style>