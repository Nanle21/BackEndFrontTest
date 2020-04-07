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
        <form @submit.prevent="addOrganisationDetails" method="post">
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
                >ajouter une organisation</button
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
      form: {
        name: '',
        description: ''
      },
    };
  },
  mounted(){
   
  },
  methods:{
    
    addOrganisationDetails(){
        var app  = this;
        // console.log(app);
        var data = app.form;
        // console.log(data);
        this.axios.post('http://127.0.0.1:8000/createOrg', data)
        .then((res) => {
            if(res.data.status != 200){
                this.$swal('',res.data.message, 'error');
            }else{
                this.$swal('',res.data.message, 'success');
                this.$router.push('/');
            }
            
            
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
