<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <br />
          <h2 class="text-center mb-5 title-login">Informações Cliente</h2>
          <b-form>
            <div class="row">
              <div class="col-6">
                <b-form-group label="Nome">
                <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.nome"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
              
              <div class="col-6">
                <b-form-group label="Documento">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.documento"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <b-form-group label="Telefone">
                <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.telefone"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
              </div>
              <div class="row">
              <div class="col-10">
                <b-form-group label="Email">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.email"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
            </div>
          </b-form>
          <b-form>
            <br />
            <b-button
              type="button"
              variant="secondary"
              block
              @click="voltar">
              <i class="fas fa-sign-in-alt"></i> Voltar
            </b-button>

  
   
              <b-button
                type="button"
                variant="primary"
                block
                @click="deletarCliente">
                Excluir
              </b-button>
          </b-form>
        </div>
      </b-col>
      <b-col sm="7" class="d-flex justify-content-center align-items-center">
        <img src="@/assets/images/cadastroTicket.svg" class="img-cadastro" />
      </b-col>
    </b-row>
  </template>
  
  <script>
  import ClienteService from "@/service/clienteService.js"
  import swal from "@/utils/alertUtils.js";
   
  export default {
    data() {
      return {
        model: {
          nome: "",
          documento: "",
        },
        id: this.$route.params.id
      }
    },
   
    methods: {
      deletarCliente() {
        ClienteService.deletarCliente(this.id).then((response) =>{
            swal.alertSuccess(response.data)
            this.$router.push({name:"clientes"})
        })
      },

      voltar(){
      this.$router.push({name:"clientes"})
    },

      mapearClienteExistente(cliente) {
      this.model.nome = cliente.nome
      this.model.documento = cliente.documento
      this.model.telefone = cliente.telefone
      this.model.email = cliente.email
    },
   
    },
    mounted(){
    var id = this.$route.params.id;
    ClienteService.buscarClienteById(id).then((response) =>{
      let cliente = response.data
      this.mapearClienteExistente(cliente)
    })
  }
  }
  </script>
   
  <style>
  
  .img-cadastro {
    width: 600px;
    height: 600px;
  }
   
  .title-warning {
    font-weight: bold;
  }
   
  </style>