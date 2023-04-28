<template>
  <div id="app">
    <h1>Tela inicial Client</h1>
    <form v-on:submit.prevent="onSubmit">
      <input type="email" name="email" v-model="email">
      <input type="password" name="password" v-model="password">
      <input type="submit" name="submit" value="Login">
    </form>
  </div>
</template>

<script>

</script>