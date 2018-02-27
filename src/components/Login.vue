<template>
  <div class="container has-text-centered">
    <div class="column is-8 is-offset-2">
      <h3 class="title has-text-grey">Login</h3>
      <p class="subtitle has-text-grey">Please login to proceed.</p>
      <div class="box">
        <form>
          <div class="field">
            <div class="control">
              <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model="email">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input class="input is-large" type="password" placeholder="Your Password" v-model="password">
            </div>
          </div>
          <button class="button is-block is-info is-large is-fullwidth" @click="clickLogin">Login</button>
        </form>
      </div>
      <p class="has-text-grey">
        <a href="../">Reset Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: 'a@a.com',
        password: '123'
      }
    },
    methods: {
      clickLogin: function() {
        console.log('click')
      }
    }
  }
</script>
