<template>
  <div>
    <section>
      <router-link to="/logout" v-if="isLoggedIn">
        <a class="button is-danger is-outlined">Logout</a>
      </router-link>
    </section>
  </div>
</template>

<script>
  import user from '../lib/user';

  export default {
    created() {
      this.isLoggedIn = user.isUserLoggedIn();
    },
    data() {
      return {
        isLoggedIn: false
      }
    }
  }
</script>
