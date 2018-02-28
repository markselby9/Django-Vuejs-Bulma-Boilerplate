<template>
  <div id="app">
    <section class="hero is-fullheight is-default is-bold">
      <navigation></navigation>
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view/>
        </div>
      </div>
      <footer-component></footer-component>
    </section>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
// import http from './lib/http';
//
// http.post('/rest-auth/login/').then(response => console.log(response));

export default {
  name: 'App',
  components: {
    Navigation,
    FooterComponent: Footer
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
