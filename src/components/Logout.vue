<template>
  <div class="container has-text-centered">
    Logout...
  </div>
</template>

<script>
  import $user from '../lib/user';

  export default {
    mounted() {
      console.log('logout');
      $user.logout(response => {
        this.$router.push(this.$route.query.redirect || '/');
      }, err => {
        this.$router.push(this.$route.query.redirect || '/');
      })
    }
  }
</script>
