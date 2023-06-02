<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-login">Clientes</h2>
          <!-- <b-row>
            <span style="margin-left: 8px; font-size: 15px;">
              <strong>
                <b-icon class="mr-2" icon="search" aria-hidden="true"></b-icon>
                Pesquisa
              </strong>
            </span>
          </b-row> -->
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Documento</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of items" :key="item.id">
                <td>{{ item.nome }}</td>
                <td>{{ item.documento }}</td>
                <td>
                  <div class="btn-group">
                    <router-link :to="{name:'descCliente', params: {id:item.id}}"><i class="fa fa-pencil"></i></router-link>
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
  import clienteService from "@/service/clienteService.js"
  
  export default {
    data() {
      return {
        items: [],
      }
    },
   
    created: function ()  {
        clienteService.buscarClientes().then((response) =>{
          this.items = response.data
        })
    },
  
    methods: {
   
        voltar(){
            this.$router.push({name:"dashboard"})
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