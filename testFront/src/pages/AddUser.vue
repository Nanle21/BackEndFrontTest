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
        <form @submit.prevent="addUser" method="post">
             <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="Nom de l'organisation..."
              v-model="form.name"
              required
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input class="col-lg-6 text-center ml-auto mr-auto col-md-8"
                placeholder="Password"
                v-model="form.password"
                required
                type="password">
            </fg-input>
             <div v-for="role in roles" :key="role.id">
                <label>{{role.name}}</label>
                <input type="checkbox" v-model="form.role" :value="role.name"/>
            </div>
            <div class="send-button">
              <button type="submit" class="btn"
                >Ajouter un utilisateur</button
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
import { Button, FormGroupInput,Checkbox } from '@/components';


export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox

  },
  data() {
    return {
      form: {
        name: '',
        password: '',
        role: []

      },
      roles: [
      {
        id: 1,
        name: 'Client',
      },
      {
        id: 2,
        name: 'Admin',
      },
      {
        id: 3,
        name: 'Guest',
      }
    ],
    name:this.$route.params.name,
    };
  },
  mounted(){
   
  },
  methods:{
    
    addUser(){
        var app  = this;
        // console.log(app);
        var data = app.form;
        // console.log(data.role);
        this.axios.post('http://127.0.0.1:8000/addUser/' + this.name, data)
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
