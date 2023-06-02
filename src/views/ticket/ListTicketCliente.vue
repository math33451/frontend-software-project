<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-login" v-if="tableVisible">Lista de Tickets</h2>
          <div class="row" v-if="!tableVisible">
            <b-form-group label="Insira o documento para pesquisa"></b-form-group>
            <div class="col-8">
                <the-mask 
                :mask="['###.###.###-##', '##.###.###/####-##']"
                v-model="model.documento"
                class="form-control form-control-sm"
                placeholder="CPF/CNPJ"/>
            </div>
            <div class="col-4">
                <b-button
                type="button"
                variant="primary"
                block
                @click="pesquisar">
                <i class="fa fa-search"></i>
              </b-button>
            </div>
            </div>
          <!-- <b-row>
            <span style="margin-left: 8px; font-size: 15px;">
              <strong>
                <b-icon class="mr-2" icon="search" aria-hidden="true"></b-icon>
                Pesquisa
              </strong>
            </span>
          </b-row> -->
          <table class="table" v-if="tableVisible">
            <thead class="thead-light">
              <tr>
                <th scope="col">Documento</th>
                <th scope="col">Nº Serie Balança</th>
                <th scope="col">Data Emissão</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of items" :key="item.id">
                <td>{{ item.documentoSolicitante }}</td>
                <td>{{ item.numeroSerieBalanca }}</td>
                <td>{{ item.dtEmissaoTicket }}</td>
                <td>{{ item.status }}</td>
              </tr>
            </tbody>
          </table>
          <br />
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
  import ticketService from "@/service/ticketService.js"
  
  export default {
    data() {
      return {
        items: [],
        tableVisible: false,
        model: {
            documento: null
        }
      }
    },
   
    created: function (documento)  {
        ticketService.buscarTodosTicketsByDoc(documento).then((response) =>{
          this.items = response.data
        })
    },
  
    methods: {
        voltar() {
            this.$router.push({name:"dashboard"})
        },
        
        pesquisar(){
            ticketService.buscarTodosTicketsByDoc(this.model.documento).then((response) =>{
                this.items = response.data;
                this.tableVisible = true;
            })
        }
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