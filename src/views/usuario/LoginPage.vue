<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col class="d-flex justify-content-center align-items-center">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>
        <b-form>
          <b-form-group
            label="E-mail"
            label-for="email"
            >
              <b-form-input
                id="email"
                type="email"
                placeholder="name@dominio.com"
                autocomplete="off"
                v-model="form.email"
              ></b-form-input>
            </b-form-group>

            <br />
 
            <b-form-group
              label-for="password"
            >
              <label class="d-flex justify-content-between">
                Senha
              </label>
 
              <b-form-input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                v-model="form.senha"
              ></b-form-input>
            </b-form-group>

            <br />
 
            <b-button
              type="button"
              variant="primary"
              block
              @click="login">
              <i class="fas fa-sign-in-alt"></i> Entrar
            </b-button>
        </b-form>
      </div>
    </b-col>
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="@/assets/images/login.svg" class="img-login" />
    </b-col>
  </b-row>
</template>

<script>
 import userService from "@/service/userService.js"
 import swal from "@/utils/alertUtils.js";

export default {
  data() {
    return {
      form: {
        email: "",
        senha: ""
      }
    }
  },
 
  methods: {
    login() {
      const request = this.mapearLogin();
      userService.acessarAplicacao(request).then((response =>{
        localStorage.setItem('user-token', response.data)
        this.$router.push({name:"dashboard"})
      }))
      .catch(() =>{
        swal.alertError("Usuário não autenticado.")
      })
    },

    mapearLogin(){
      return {
        email: this.form.email,
        senha: this.form.senha
      }
    }
 
  }
}
</script>
 
<style>

.img-login {
  width: 600px;
  height: 600px;
}
 
.title-login {
  font-weight: bold;
}
 
</style>