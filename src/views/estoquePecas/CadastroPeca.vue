<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <br />
          <h2 class="text-center mb-5 title-login">Cadastrar Peça</h2>
          <b-form>
            <div class="row">
              <div class="col-12">
                <b-form-group label="Nome">
                <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.nome"
                ></b-form-input>
                </b-form-group>
              </div>
            </div>
  
            <br />
  
            <div class="row">
              
              <div class="col-6">
                <b-form-group label="Quantidade em estoque">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.quantidade"
                ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-6">
                <b-form-group label="Valor (R$)">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.valor"
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
                @click="cadastrarPeca">
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
  import EstoqueService from "@/service/estoqueService.js"
  import swal from "@/utils/alertUtils.js";
   
  export default {
    data() {
      return {
        model: {
          nome: "",
          quantidade: "",
          valor: ""
        }
      }
    },
   
    methods: {
      cadastrarPeca() {
        const request = this.mapearPeca();
        EstoqueService.criarPeca(request).then((response) =>{
          swal.alertSuccess(response.data)
          this.$router.push({name:"estoquePeca"})
        })
        .catch(() =>{
          swal.alertError("Erro ao enviar, tente novamente mais tarde.")
        })
      },
  
      mapearPeca() {
        return {
          nome:  this.model.nome,
          quantidade: this.model.quantidade,
          valor: this.model.valor
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