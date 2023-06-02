<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col class="d-flex justify-content-center align-items-center">
      <div class="col-8">
        <h2 class="text-center mb-5 title-warning">Reclamações?</h2>
        <h4 class="text-center mb-5">Envie um ticket e nossa equipe entrará em contato.</h4>
        <b-form>

            <br />
            <div class="col text-center">
              <router-link to="/cadastrarTicket">
                <b-button
                  type="button"
                  variant="primary">
                  <i class="fas fa-sign-in-alt"></i> Enviar Ticket
                </b-button>
              </router-link>
            </div>
            <br />
            <div class="col text-center">
              <router-link to="/acompanharTicket">
                <b-button
                  type="button"
                  variant="primary">
                  <i class="fas fa-sign-in-alt"></i> Acompanhar Tickets
                </b-button>
              </router-link>
            </div>
        </b-form>
      </div>
    </b-col>
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="@/assets/images/warning.svg" class="img-warning" />
    </b-col>
  </b-row>
</template>

<script>
 
export default {
  data() {
    return {
    }
  },
 
  methods: {
 
  }
}
</script>
 
<style>

.img-warning {
  width: 600px;
  height: 600px;
}
 
.title-warning {
  font-weight: bold;
}
 
</style>