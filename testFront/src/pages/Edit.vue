<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Ceci est notre grande entreprise.</h1>
        </div>
      </div>
    </div>
    
    <div class="section section-contact-us text-center">
      <div class="container">
        <!-- <h2 class="title">Want to work with us['?</h2> -->
        <!-- <p class="description">Your project is very important to us.</p> -->
        <form @submit.prevent="updateOrganisationDetails" method="post">
             <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="Nom de l'organisation..."
              v-model="form.name"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.description"
                placeholder="Modifier la description de l'organisation"
              ></textarea>
            </div>
            <div class="send-button">
              <button type="submit" class="btn"
                >Mettre à jour l'organisation</button
              >
            </div>
          </div>
        </div>
        </form>
       
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
        name:this.$route.params.name,
      form: {
        name: '',
        description: ''
      },
    };
  },
  mounted(){
    this.getOrganisations();
  },
  methods:{
    getOrganisations(){
    // console.log(this.name);
      this.axios.get('http://127.0.0.1:8000/getSpecificOrg/' + this.name)
      .then((res) => {
        // console.log(res);
        this.form.name = res.data.data.name;
        this.form.description = res.data.data.description;
      })
      .catch(e => {
        console.log(e);
      })
    },
    updateOrganisationDetails(){
        var app  = this;
        // console.log(app);
        var data = app.form;
        this.axios.put('http://127.0.0.1:8000/editpecificOrg/' + app.name, data)
        .then((res) => {
            this.$swal('',res.data.message, 'success');
            this.$router.push('/');
            // console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    }
  }
};
</script>
<style></style>
