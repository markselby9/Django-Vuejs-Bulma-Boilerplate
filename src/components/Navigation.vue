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
            <a class="navbar-item">
              Register my mentor
            </a>
            <router-link to="/login" class="navbar-item" active-class="is-active">Login</router-link>
            <a class="navbar-item">
              Help
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
