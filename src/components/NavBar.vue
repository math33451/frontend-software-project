<template>
    <b-navbar toggleable type="dark" variant="dark">
        <router-link to="/">
            <img src="@/assets/images/balanca.png" class="img-balanca" alt="balanca">
                Site Peso Certo
        </router-link>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/login" class="text-end">Sign In</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
.img-balanca {
  width: 35px;
  height: 35px;
}
</style>