<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Now UI Kit.</h1>
          <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>
        </div>
        <h6 class="category category-absolute">
          Designed by
          <a href="http://invisionapp.com/" target="_blank">
            <img src="img/invision-white-slim.png" class="invision-logo" /> </a
          >. Coded by
          <a href="https://www.creative-tim.com" target="_blank">
            <img
              src="img/creative-tim-white-slim2.png"
              class="creative-tim-logo"
            /> </a
          >.
        </h6>
      </div>
    </div>
    
  
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
                 <router-link class="navbar-brand" to="/">Edit {{organisation.name}}</router-link>
                  <button class="btn">Delete {{organisation.name}}</button>
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
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
// import {Collapse, CollapseItem} from 'src/components'

import {Tabs, TabPane} from '../components'

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    BasicElements,
    Navigation,
    Tabs,
    TabPane
  },
  data(){
    return{
      organisations:'',
      
    }
  },
  mounted(){
    this.getOrganisations();
  },
  methods:{
    getOrganisations(){
      this.axios.get('http://127.0.0.1:8000/getOrganisation')
      .then((res) => {
        console.log(res);
        this.organisations = res.data.data.organizations;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
};
</script>
<style></style>
