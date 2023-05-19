<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-login">Estoque de Peças</h2>
          <!-- <b-row>
            <span style="margin-left: 8px; font-size: 15px;">
              <strong>
                <b-icon class="mr-2" icon="search" aria-hidden="true"></b-icon>
                Pesquisa
              </strong>
            </span>
          </b-row> -->
          <div class="col text-right">
                <router-link to="/cadastraPeca">
                  <b-button
                    type="button"
                    variant="primary">
                    <i class="fa fa-plus"></i> Criar Peça
                  </b-button>
                </router-link>
              </div>
              <br />
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Valor</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of items" :key="item.id">
                <td>{{ item.nome }}</td>
                <td>{{ item.quantidade }}</td>
                <td>{{ item.valor }}</td>
                <td>
                  <div class="btn-group">
                    <router-link :to="{name:'peca', params: {id:item.id}}"><i class="fa fa-pencil"></i></router-link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
      <b-col sm="7" class="d-flex justify-content-center align-items-center">
        <img src="@/assets/images/list.svg" class="img-login" />
      </b-col>
    </b-row>
  </template>
  
  <script>
  import estoquePecaService from "@/service/estoqueService.js"
  
  export default {
    data() {
      return {
        items: [],
      }
    },
   
    created: function ()  {
        estoquePecaService.buscarTodasPecas().then((response) =>{
          this.items = response.data
        })
    },
  
    methods: {
   
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