<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col class="d-flex justify-content-center align-items-center">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Lista de Tickets</h2>
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
              <th scope="col">Solicitante</th>
              <th scope="col">Nº Serie Balança</th>
              <th scope="col">Data Emissão</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of items" :key="item.id">
              <td>{{ item.nomeSolicitante }}</td>
              <td>{{ item.numeroSerieBalanca }}</td>
              <td>{{ item.dtEmissaoTicket }}</td>
              <td>
                <div class="btn-group">
                  <router-link :to="{name:'ticket', params: {id:item.id}}"><i class="fa fa-pencil"></i></router-link>
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
import ticketService from "@/service/ticketService.js"

export default {
  data() {
    return {
      items: [],
    }
  },
 
  created: function ()  {
      ticketService.buscarTodosTickets().then((response) =>{
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