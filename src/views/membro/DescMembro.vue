<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col class="d-flex justify-content-center align-items-center">
        <div class="col-8">
          <br />
          <h2 class="text-center mb-5 title-login">Detalhes Membro</h2>
          <b-form>
            <div class="row">
              <div class="col-12">
                <b-form-group label="Nome Completo">
                <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.nomeCompleto"
                  
                ></b-form-input>
                </b-form-group>
              </div>
            </div>
  
            <br />
  
            <div class="row">
              <div class="col-12">
                <b-form-group label="Documento">
                  <the-mask 
                  :mask="['###.###.###-##']"
                  v-model="model.cpf"
                  class="form-control form-control-sm"
                  
                  placeholder="CPF"/>
                </b-form-group>
              </div>
            </div>
  
            <br />
            <div class="row">
              <div class="col-6"> 
                <b-form-group label="Email">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.email"
                  
                ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-6">
                <b-form-group label="Título">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.titulo"
                  
                ></b-form-input>
                </b-form-group>
              </div>
            </div>
  
            <br />
            <div class="row">
              <div class="col-12">
                <b-form-group label="Telefone">
                  <the-mask 
                  :mask="['(##) ####-####', '(##) #####-####']"
                  v-model="model.numeroTelefone"
                  class="form-control form-control-sm"
                  
                  placeholder="(XX) XXXX-XXXX"/>
                </b-form-group>
              </div>
            </div>
  
            <br />
  
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Dados de Endereço</h5>
                <br />
                <div class="row">
                <div class="col-4">
                <b-form-group label="CEP">
                  <the-mask 
                  :mask="['#####-###']"
                  v-model="model.cep"
                  class="form-control form-control-sm"
                  />
                </b-form-group>
              </div>
              <div class="col-4">
                <b-form-group label="Municipio">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.localidade"
                  
                ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-2">
                <b-form-group label="UF">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.uf"
                  
                ></b-form-input>
                </b-form-group>
              </div>
              </div>
                <br />
                <div class="col-12">
                <b-form-group label="Endereço">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.logradouro"
                  
                ></b-form-input>
                </b-form-group>
              </div>
                <br />
                <div class="row">
                <div class="col-4">
                <b-form-group label="Nº Endereço">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.numeroEndereco"
                  
                ></b-form-input>
                </b-form-group>
              </div>
                <br />
                <div class="col-8">
                <b-form-group label="Complemento">
                  <b-form-input
                  class="form-control form-control-sm"
                  v-model="model.complemento"
                  
                ></b-form-input>
                </b-form-group>
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
              
              <b-button
              type="button"
              variant="primary"
              block
              @click="salvarMembro">
              <i class="fas fa-sign-in-alt"></i> Salvar
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
  import MembroService from "@/service/membroService.js"
  import EnderecoService from "@/service/enderecoService.js"
  import swal from "@/utils/alertUtils.js"; 
  
  export default {
    data() {
      return {
        model: {
          id: null,
          cpf: "",
          nomeCompleto:"",
          titulo:"",
          dataNascimento:"",
          numeroTelefone: "",
          email: "",
          cep: "",
          logradouro: "",
          numeroEndereco: null,
          complemento: "",
          bairro: "",
          localidade: "",
          uf: ""
        },
        id: this.$route.params.id,
        isNewMember: false,
      }
    },
   
    methods: {

      salvarMembro() {
        if(this.isNewMember){
          MembroService.criarMembro(this.model).then((response) =>{
          swal.alertSuccess(response.data)
          this.$router.push({name:"listaMembros"})
          }).catch((e) =>{
            swal.alertError(e.response.data.message)
          })
        } else{
          MembroService.editarMembro(this.model).then((response) =>{
          swal.alertSuccess(response.data)
          this.$router.push({name:"listaMembros"})
          }).catch((e) =>{
            swal.alertError(e.response.data.message)
          })
        }
      },

      getEndereco: async function(value) {
        await EnderecoService.buscaPorCep(value).then((response) =>{
          if(response.status == 200){
            let enderecoResponse = response.data;
            this.model.logradouro = enderecoResponse.logradouro;
            this.model.bairro = enderecoResponse.bairro;
            this.model.localidade = enderecoResponse.localidade;
            this.model.uf = enderecoResponse.uf;
          } else {
            this.model.cep = null;
            this.model.logradouro = null;
            this.model.bairro = null;
            this.model.localidade = null;
          }
        })
        .catch((e) =>{
          swal.alertError(e.response.data.message)
        });
      },

      inicializarVariaveis(){
        this.model = {
          id: null,
          cpf: "",
          nomeCompleto:"",
          titulo:"",
          dataNascimento:"",
          numeroTelefone: "",
          email: "",
          cep: "",
          logradouro: "",
          numeroEndereco: null,
          complemento: "",
          bairro: "",
          localidade: "",
          uf: ""
        }
        this.isNewMember = true;
      },
  
      mapearMembro(membro) {
        this.model.nomeCompleto = membro.nomeCompleto
        this.model.cpf = membro.cpf
        this.model.titulo = membro.titulo
        this.model.dataNascimento = membro.dataNascimento
        this.model.numeroTelefone = membro.numeroTelefone
        this.model.email = membro.email

        this.model.cep = membro.endereco.cep
        this.model.logradouro = membro.endereco.logradouro
        this.model.numeroEndereco = membro.endereco.numeroEndereco
        this.model.complemento = membro.endereco.complemento
        this.model.bairro = membro.endereco.bairro
        this.model.localidade = membro.endereco.localidade
        this.model.uf = membro.endereco.uf
      },
  
      voltar(){
        this.$router.push({name:"listaMembros"})
      }
   
    },
    mounted(){
      var id = this.$route.params.id;
      if(id == null){
        this.inicializarVariaveis();
      }else{
        this.model.id = id;
        MembroService.buscarMembroById(id).then((response) =>{
        let membro = response.data
        this.mapearMembro(membro)
        });
      }
    },
    watch: {
      "model.cep": async function(newValue) {
        if(newValue && newValue.length === 8){
          await this.getEndereco(newValue);
          return newValue;
        }
      }
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