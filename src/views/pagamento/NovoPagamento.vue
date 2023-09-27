<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <br />
          <h2 class="text-center mb-5 title-login">Novo Pagamento</h2>
          <b-form>    
            <br />
  
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <b-form-group label="Documento do Pagante">
                      <the-mask 
                      :mask="['###.###.###-##']"
                      v-model="model.cpfPagante"
                      class="form-control form-control-sm"
                      
                      placeholder="CPF"/>
                    </b-form-group>
                  </div>
               </div>

               <div class="row">
                  <div class="col-8">
                    <b-form-group label="Valor">
                      <money v-model="model.valor" v-bind="money"></money>
                    </b-form-group>
                  </div>
               </div>
                <br />
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
                <i class="fas fa-sign-in-alt"></i> Cancelar
              </b-button>
              
              <b-button
              type="button"
              variant="success"
              block
              @click="salvarPagamento">
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
  import PagamentoService from "@/service/pagamentoService.js"
  import swal from "@/utils/alertUtils.js"; 
  
  export default {
    data() {
      return {
        model: {
          valor: null,
          cpfPagante: null,
        },
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          precision: 2,
          masked: false
        },
      }
    },
   
    methods: {

      salvarPagamento() {
        PagamentoService.salvarPagamento(this.model).then((response) =>{
          swal.alertSuccess(response.data)
          this.$router.push({name:"dashboard"})
        }).catch((e) =>{
            swal.alertError(e.response.data.message)
          })
      },

      inicializarVariaveis(){
        this.model = {
          valor: null,
          documento: null,
        }
      },
  
      voltar(){
        this.$router.push({name:"dashboard"})
      }
   
    },
    mounted(){
    },
    watch: {
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