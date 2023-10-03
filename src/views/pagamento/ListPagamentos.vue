<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-login">Lista de Pagamentos</h2>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Autor</th>
                <th scope="col">Data</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p of pagamentos" :key="p.id">
                <td>{{ p.pagante.nomeCompleto }}</td>
                <td>{{ p.dataPagamento }}</td>
                <td>
                  <div class="btn-group">
                    <router-link :to="{name:'descricaoPagamento', params: {id:p.id}}"><i class="fa fa-eye"></i></router-link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <b-button
                type="button"
                variant="secondary"
                block
                @click="voltar">
                <i class="fas fa-sign-in-alt"></i> Voltar
              </b-button>
        </div>
      </b-col>
      <b-col sm="7" class="d-flex justify-content-center align-items-center">
        <img src="@/assets/images/list.svg" class="img-login" />
      </b-col>
    </b-row>
  </template>
  
  <script>
  import pagamentoService from "@/service/pagamentoService.js"
  
  export default {
    data() {
      return {
        pagamentos: [],
      }
    },
   
    created: function ()  {
        pagamentoService.buscarTodos().then((response) =>{
          this.pagamentos = response.data
        })
    },
  
    methods: {
      voltar(){
              this.$router.push({name:"telaInicial"})
          },
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