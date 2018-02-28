<template>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="http://via.placeholder.com/200x100" alt="logo"/>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/" class="navbar-item" active-class="is-active">Home</router-link>
            <router-link to="/mentorlist" class="navbar-item" active-class="is-active">Find my mentor!</router-link>
            <router-link to="/userpage" class="navbar-item" active-class="is-active">User page</router-link>
            <!--<router-link to="/logout" class="navbar-item" active-class="is-active" v-if="isLoggedIn">Logout</router-link>-->
            <!--<router-link to="/login" class="navbar-item" active-class="is-active" v-else>Login</router-link>-->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
