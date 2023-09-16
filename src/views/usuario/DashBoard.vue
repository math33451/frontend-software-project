<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-warning">Seja Bem Vindo, {{ nomeUsuario }}.</h2>
          <b-form>
  
              <br />
              <div class="col text-center">
                <router-link to="/consultarMembros">
                  <b-button
                    type="button"
                    variant="primary">
                    <i class="fas fa-sign-in-alt"></i> Visualizar Membros
                  </b-button>
                </router-link>
              </div>
              <br />
              <div class="col text-center">
                <router-link to="/pagamento">
                  <b-button
                    type="button"
                    variant="primary">
                    <i class="fas fa-sign-in-alt"></i> Realizar Pagamento
                  </b-button>
                </router-link>
              </div>
          </b-form>
        </div>
      </b-col>
      <b-col sm="7" class="d-flex justify-content-center align-items-center">
        <img src="@/assets/images/dashboard.svg" class="img-warning" />
      </b-col>
    </b-row>
  </template>
  
  <script>

  export default {
    data() {
      return {
        nomeUsuario: "Administrador",
        quantidadeTickets: 0
      }
    },
   
    async created() {
        await this.inicializarVariaveis();
    },

    methods: {
        inicializarVariaveis: async function() {
        },
   
    },
  }
  </script>
   
  <style>
  
  .img-warning {
    width: 600px;
    height: 600px;
  }
   
  .title-warning {
    font-weight: bold;
  }
   
  </style>