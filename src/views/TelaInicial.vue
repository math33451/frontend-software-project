<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col class="d-flex justify-content-center align-items-center">
      <div class="col-8">
        <h2 class="text-center mb-5 title-warning">Seja um Parceiro de Deus</h2>
        <b-form>

            <br />
            <div class="col text-center">
              <router-link to="/consultarMembros">
                <b-button
                  type="button"
                  variant="primary">
                  <i class="fas fa-sign-in-alt"></i> Consultar Membros
                </b-button>
              </router-link>
            </div>
            <br />
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