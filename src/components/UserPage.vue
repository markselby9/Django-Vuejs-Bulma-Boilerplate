<template>
  <div>
    <section>
      <div>
        {{this.profile}}
      </div>
      <router-link to="/logout" v-if="isLoggedIn">
        <a class="button is-danger is-outlined">Logout</a>
      </router-link>
    </section>
  </div>
</template>

<script>
  import $user from '../lib/user';
  import $profile from '../lib/profile';

  export default {
    created() {
      this.isLoggedIn = $user.isUserLoggedIn();
      $profile.getProfile(response => {
        this.profile = response;
      }, err => {
      });
    },
    data() {
      return {
        isLoggedIn: false,
        profile: null
      }
    }
  }
</script>
