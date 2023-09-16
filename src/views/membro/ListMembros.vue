<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-login">Lista de Membros</h2>
          <b-row>
            <div class="col-8 ">
              <b-button
                type="button"
                variant="primary"
                block
                @click="novoMembro">
                <i class="fas fa-user-plus"></i> Novo Membro
              </b-button>
            </div>
          </b-row>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Título</th>
                <th scope="col">Telefone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m of membros" :key="m.id">
                <td>{{ m.nomeCompleto }}</td>
                <td>{{ m.titulo }}</td>
                <td>{{ m.numeroTelefone }}</td>
                <td>
                  <div class="btn-group">
                    <router-link :to="{name:'membro', params: {id:m.id}}"><i class="fa fa-pencil"></i></router-link>
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
  import membroService from "@/service/membroService.js"
  
  export default {
    data() {
      return {
        membros: [],
      }
    },
   
    created: function ()  {
        membroService.buscarTodosMembros().then((response) =>{
          this.membros = response.data
        })
    },
  
    methods: {

      novoMembro(){
        this.$router.push({name:"membro"})
      },

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