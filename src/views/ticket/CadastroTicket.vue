<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col class="d-flex justify-content-center align-items-center">
      <div class="col-8">
        <br />
        <h2 class="text-center mb-5 title-login">Cadastrar Ticket</h2>
        <b-form>
          <div class="row">
            <div class="col-12">
              <b-form-group label="Documento Solicitante">
                <the-mask 
                :mask="['###.###.###-##', '##.###.###/####-##']"
                v-model="model.documentoSolicitante"
                class="form-control form-control-sm"
                placeholder="CPF/CNPJ"/>
              </b-form-group>
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col-12">
              <b-form-group label="Nome Solicitante">
              <b-form-input
                class="form-control form-control-sm"
                v-model="model.nomeSolicitante"
              ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col-12">
              <b-form-group label="Email Solicitante">
                <b-form-input
                class="form-control form-control-sm"
                v-model="model.emailSolicitante"
              ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col-12">
              <b-form-group label="Telefone/Celular Solicitante">
                <the-mask 
                :mask="['(##) ####-####', '(##) #####-####']"
                v-model="model.telefoneSolicitante"
                class="form-control form-control-sm"
                placeholder="(XX) XXXX-XXXX"/>
              </b-form-group>
            </div>
          </div>

          <br />

          <div class="row">
            <div class="col-6">
              <b-form-group label="Nº Série Balança">
                <the-mask 
                :mask="['#####-#']"
                v-model="model.numeroSerieBalanca"
                class="form-control form-control-sm"
                placeholder="XXXXX-X"/>
              </b-form-group>
            </div>
            
            <div class="col-6">
              <b-form-group label="Quantidade de Balanças">
                <b-form-input
                class="form-control form-control-sm"
                v-model="model.qtdBalanca"
              ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <br />

          <div class="row">
            <div class="col-12">
              <b-form-group label="Descrição do Problema">
                <b-form-textarea
                  id="textarea"
                  v-model="model.descricao"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
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
              @click="cadastrarTicket">
              <i class="fas fa-sign-in-alt"></i> Enviar
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
import TicketService from "@/service/ticketService.js"
// import ClienteService from "@/service/clienteService.js"
import swal from "@/utils/alertUtils.js";
 
export default {
  data() {
    return {
      model: {
        nomeSolicitante: "",
        documentoSolicitante:"",
        emailSolicitante:"",
        telefoneSolicitante:"",
        numeroSerieBalanca: "",
        qtdBalanca: "",
        descricao: ""
      }
    }
  },
 
  methods: {
    cadastrarTicket() {
      const request = this.mapearTicket();
      TicketService.criarTicket(request).then((response) =>{
        swal.alertSuccess(response.data)
        this.$router.push({name:"telaInicial"})
      })
      .catch(() =>{
        swal.alertError("Erro ao enviar o ticket, tente novamente mais tarde.")
      })
    },

    // buscaCliente(){
    //   const request = this.model.documentoSolicitante;
    //   ClienteService.buscarPorDocumento(request).then((response) =>{
    //     this.mapearCliente(response.data);
    //   })
    // },

    // mapearCliente(data) {
    //   this.model.nomeSolicitante = data.nome
    //   this.model.emailSolicitante = data.email
    //   this.model.telefoneSolicitante = data.telefone
    // },

    mapearTicket() {
      return {
        nomeSolicitante:  this.model.nomeSolicitante,
        documentoSolicitante: this.model.documentoSolicitante,
        emailSolicitante: this.model.emailSolicitante,
        telefoneSolicitante: this.model.telefoneSolicitante,
        numeroSerieBalanca: this.model.numeroSerieBalanca,
        qtdBalanca: this.model.qtdBalanca,
        descricao: this.model.descricao
      }
    },
 
  },
  computed: {
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