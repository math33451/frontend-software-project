<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <h2 class="text-center mb-5 title-login">Lista de Pagamentos</h2>
          <b-button
                type="button"
                variant="primary"
                block
                @click="fechamento"
                v-if="!exibeFechamento">
                <i class="fa fa-calendar"></i> Fechar Pagamentos
          </b-button>
          <div class="row" v-if="exibeFechamento">
            <label>Mês de Fechamento</label>
              <select class="col-6" v-model="mesFechamento">
                <option v-for="mes in mesesFechamento" v-bind:value="mes.value" :key="mes.value">
                  {{ mes.text }}
                </option>
              </select>
            <b-button
                type="button"
                class="col-2"
                variant="success"
                block
                @click="fecharMes">
                <i class="fa fa-arrow-circle-right"></i>
            </b-button>
          </div>
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
                <td>{{ p.dataExibicao }}</td>
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
  // import swal from "@/utils/alertUtils.js"; 
  
  export default {
    data() {
      return {
        pagamentos: [],
        detalhesFechamento: null,
        exibeFechamento: false,
        mesFechamento: null,
        mesesFechamento: [{value: 1, text: "Janeiro"}, 
        {value: 2, text: "Fevereiro"}, {value: 3, text: "Março"}, 
        {value: 4, text: "Abril"}, {value: 5, text: "Maio"}, 
        {value: 6, text: "Junho"}, {value: 7, text: "Julho"}, 
        {value: 8, text: "Agosto"}, {value: 9, text: "Setembro"}, 
        {value: 10, text: "Outubro"}, {value: 11, text: "Novembro"}, 
        {value: 12, text: "Dezembro"}]
      }
    },
   
    created: function ()  {
        pagamentoService.buscarTodos().then((response) =>{
          this.pagamentos = response.data
        });
    },
  
    methods: {
      voltar(){
              this.$router.push({name:"dashboard"})
          },
      
      // dataAtualFormatada(data){
      //   let dataFormatada = data.split('-').reverse().join('/');
      //   return dataFormatada;
      // }

      fechamento(){
        this.exibeFechamento = true
      },

      fecharMes(){
        pagamentoService.fecharMes(this.mesFechamento).then((response) =>{
          let binario = response.data;
          const url = window.URL.createObjectURL(binario);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `Fechamento_mes${this.mesFechamento}.xlsx`);
          document.body.appendChild(link);
          link.click();
        })
        .catch((response) => console.log(response));
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