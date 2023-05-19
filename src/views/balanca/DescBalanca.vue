<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <br />
          <h2 class="text-center mb-5 title-login">Informações Balança</h2>
          <b-form>
            <div class="row">
              <div class="col-6">
                <b-form-group label="Número de Série">
                <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.numeroSerie"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
              
              <div class="col-6">
                <b-form-group label="Documento Proprietário">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.documentoProprietario"
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
                variant="primary"
                block
                @click="deletarBalanca">
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
  import BalancaService from "@/service/balancaService.js"
  import swal from "@/utils/alertUtils.js";
   
  export default {
    data() {
      return {
        model: {
          numeroSerie: "",
          documentoProprietario: "",
        },
        id: this.$route.params.id
      }
    },
   
    methods: {
      cadastrarBalanca() {
        const request = this.mapearBalanca();
        BalancaService.criarBalanca(request).then((response) =>{
          swal.alertSuccess(response.data)
          this.$router.push({name:"balancas"})
        })
        .catch(() =>{
          swal.alertError("Erro ao enviar, tente novamente mais tarde.")
        })
      },

      deletarBalanca() {
        BalancaService.deletarBalanca(this.id).then((response) =>{
            swal.alertSuccess(response.data)
            this.$router.push({name:"balancas"})
        })
      },
  
      mapearBalanca() {
        return {
          numeroSerie:  this.model.numeroSerie,
          documentoProprietario: this.model.documentoProprietario,
        }
      },

      mapearBalancaExistente(balanca) {
      this.model.numeroSerie = balanca.numeroSerie
      this.model.documentoProprietario = balanca.documentoProprietario
    },
   
    },
    mounted(){
    var id = this.$route.params.id;
    BalancaService.buscarBalancaById(id).then((response) =>{
      let balanca = response.data
      this.mapearBalancaExistente(balanca)
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