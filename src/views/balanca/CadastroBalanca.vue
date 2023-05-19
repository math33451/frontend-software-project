<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <br />
          <h2 class="text-center mb-5 title-login">Cadastrar Balança</h2>
          <b-form>
            <div class="row">
              <div class="col-6">
                <b-form-group label="Número de Série">
                <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.numeroSerie"
                ></b-form-input>
                </b-form-group>
              </div>
              
              <div class="col-6">
                <b-form-group label="Documento Proprietário">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.documentoProprietario"
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
                @click="cadastrarBalanca">
                <i class="fas fa-sign-in-alt"></i> Salvar
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
        }
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
  
      mapearBalanca() {
        return {
          numeroSerie:  this.model.numeroSerie,
          documentoProprietario: this.model.documentoProprietario,
        }
      },
   
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