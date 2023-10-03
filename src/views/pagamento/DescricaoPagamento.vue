<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <br />
          <h2 class="text-center mb-5 title-login">Dados Pagamento</h2>
          <b-form>    
            <br />
  
            


               <div class="row">
                  <div class="col-6">
                    <b-form-group label="Valor">
                      <money v-model="model.valor" v-bind="money" disabled></money>
                    </b-form-group>
                  </div>
                  <div class="col-6"> 
                <b-form-group label="Data">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.dataPagamento"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
               </div>
                <br />
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Dados do Pagante</h5>

               <br />
               <div class="row">
              <div class="col-12"> 
                <b-form-group label="Nome">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.pagante.nome"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
              <div class="row">
                  <div class="col-6">
                    <b-form-group label="Documento">
                      <the-mask 
                      :mask="['###.###.###-##']"
                      v-model="model.pagante.cpf"
                      class="form-control form-control-sm"
                      disabled
                      placeholder="CPF"/>
                    </b-form-group>
                  </div>
                  <div class="col-6">
                <b-form-group label="Título">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.pagante.titulo"
                  disabled
                ></b-form-input>
                </b-form-group>
              </div>
               </div>
            </div>
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
          dataPagamento: null,
          pagante:{
            nome: null,
            cpf: null,
            titulo: null
          }
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
            dataPagamento: null,
            pagante:{
                nome: null,
                cpf: null,
                titulo: null
            }
        }
      },

      mapearPagamento(p){
        this.model.id = p.id
        this.model.valor = p.valor;
        this.model.dataPagamento = p.dataPagamento;
        this.model.pagante.nome = p.pagante.nomeCompleto;
        this.model.pagante.cpf = p.pagante.cpf;
        this.model.pagante.titulo = p.pagante.titulo;
      },
  
      voltar(){
        this.$router.push({name:"telaInicial"})
      }
   
    },
    mounted(){
        PagamentoService.buscarPagamentoById(this.$route.params.id).then((response) =>{
            let pagamento = response.data
            this.mapearPagamento(pagamento)
        });
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