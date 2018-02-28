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
            <router-link to="/" class="navbar-item">Home</router-link>
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

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
</script>
