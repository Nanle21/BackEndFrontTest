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
          <h1 class="title">Ceci est notre grande organisation.</h1>
        </div>
      </div>
    </div>

    <p align="center">
      <router-link class="navbar-brand" to="add">Ajouter une organisation</router-link>
    </p>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <tabs type="primary" vertical class="row" v-for="organisation in organisations" v-bind:key="organisation.id">
            <tab-pane :label="organisation.name">
              <p>{{organisation.description}}</p>
              <ul class="list-group">
                <li class="list-group-item" v-for="user in organisation.users" v-bind:key="user.name">{{user.name}}
                  <p v-for="role in user.role" v-bind:key="role">
                    {{role}}
                  </p>
                 
                </li>
                <router-link class="navbar-brand" :to="'addUser/' + organisation.name" >Add User {{organisation.name}}</router-link>
                 <router-link class="navbar-brand" :to="'edit/' + organisation.name" >Edit {{organisation.name}}</router-link>
                  <button class="btn" @click="deleteOgr(organisation.name)">Delete {{organisation.name}}</button>
              </ul>
            </tab-pane>
          </tabs>
          </div>
        </div>
          
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import {Tabs, TabPane} from '../components'
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Tabs,
    TabPane
  },
  data() {
    return {
      organisations:'',
    };
  },
  mounted(){
    this.getOrganisations();
  },
  methods:{
    getOrganisations(){
      this.axios.get('http://127.0.0.1:8000/getOrganisation')
      .then((res) => {
        // console.log(res);
        this.organisations = res.data.data.organizations;
      })
      .catch(e => {
        // console.log(e);
      })
    },
    deleteOgr(name){
      // alert(name);
      this.axios.delete('http://127.0.0.1:8000/deleteOrganisation/' + name)
      .then((res) => {
            this.$swal('',res.data.message, 'OK');
            this.getOrganisations();
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
};
</script>
<style></style>
