<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col class="d-flex justify-content-center align-items-center">
      <div class="col-8">
        <br />
        <h2 class="text-center mb-5 title-login">Detalhes Ticket</h2>
        <b-form>
          <div class="row">
            <div class="col-12">
              <b-form-group label="Nome Solicitante">
              <b-form-input
                class="form-control form-control-sm"
                v-model="model.nomeSolicitante"
                disabled
              ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <br />

          <div class="row">
            <div class="col-12">
              <b-form-group label="Documento Solicitante">
                <the-mask 
                :mask="['###.###.###-##', '##.###.###/####-##']"
                v-model="model.documentoSolicitante"
                class="form-control form-control-sm"
                disabled
                placeholder="CPF/CNPJ"/>
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
                disabled
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
                disabled
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
                placeholder="XXXXX-X"
                disabled/>
              </b-form-group>
            </div>
            
            <div class="col-6">
              <b-form-group label="Quantidade de Balanças">
                <b-form-input
                class="form-control form-control-sm"
                v-model="model.qtdBalanca"
                disabled
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
                  disabled
                ></b-form-textarea>
              </b-form-group>
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
            <b-button
              type="button"
              variant="primary"
              block
              @click="encerraTicket">
              <i class="fas fa-sign-in-alt"></i> Encerrar
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
      },
      id: this.$route.params.id
    }
  },
 
  methods: {

    mapearTicket(ticket) {
      this.model.nomeSolicitante = ticket.nomeSolicitante
      this.model.documentoSolicitante = ticket.documentoSolicitante
      this.model.emailSolicitante = ticket.emailSolicitante
      this.model.telefoneSolicitante = ticket.telefoneSolicitante
      this.model.numeroSerieBalanca = ticket.numeroSerieBalanca
      this.model.qtdBalanca = ticket.qtdBalanca
      this.model.descricao = ticket.descricao
    },

    encerraTicket(){
      TicketService.encerraTicket(this.id).then((response) =>{
        swal.alertSuccess(response.data)
      })
      .catch(()=>{
        swal.alertError("Erro ao encerrar o ticket, tente novamente mais tarde.")
      })
    },

    voltar(){
      this.$router.push({name:"tickets"})
    }
 
  },
  mounted(){
    var id = this.$route.params.id;
    TicketService.buscarTicketById(id).then((response) =>{
      let ticket = response.data
      this.mapearTicket(ticket)
      TicketService.setaVisualizado(id);
    })
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