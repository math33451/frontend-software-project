<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-warning">Seja Bem Vindo, {{ nomeUsuario }}.</h2>
          <h4 class="text-center mb-5">Você tem {{ quantidadeTickets }} tickets não visualizados.</h4>
          <b-form>
  
              <br />
              <div class="col text-center">
                <router-link to="/tickets">
                  <b-button
                    type="button"
                    variant="primary">
                    <i class="fas fa-sign-in-alt"></i> Visualizar Tickets
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
   import ticketService from "@/service/ticketService.js"

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
            await ticketService.buscarQuantidadeTicketsPendentes().then((response) =>{
                this.quantidadeTickets = response.data
            })
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