<template>
  <div>
    <section class="section" v-if="selectedMentor!=null">
      <p class="title is-6">You have selected a mentor: {{selectedMentor.name}}!</p>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-200*200">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{selectedMentor.name}}</strong>
                <br>
                <small>Wished mentor for @{{this.currentUser.username}}</small>
                <br>
                You have selected Mentor <strong>{{selectedMentor.name}}</strong>
                as your mentor wish. Please wait for the result!
              </p>

            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </section>
    <section v-else>
      <p class="title">You haven't selected a mentor yet!</p>
    </section>

    <section class="section">
      <router-link to="/logout" v-if="isLoggedIn">
        <a class="button is-danger is-outlined">Logout</a>
      </router-link>
    </section>
  </div>
</template>

<script>
  import $user from '../lib/user';
  import $profile from '../lib/profile';
  import $http from '../lib/http';

  export default {
    created() {
      this.currentUser = $user.getCurrentUser();
      this.isLoggedIn = $user.isUserLoggedIn();
      $profile.getProfile(response => {
        this.profile = response;
      }, err => {
      });
    },
    data() {
      return {
        currentUser: null,
        isLoggedIn: false,
        profile: null,
        selectedMentor: null
      }
    },
    watch: {
      profile(newVal, oldVal) {
        const selectedMentorID = newVal.selected_mentor;
        $http.get(`/mentors/${selectedMentorID}`).then(response => {
          this.selectedMentor = response;
        }).catch(error => {
          console.log(error);
        });
        console.log(newVal, oldVal);
      }
    }
  }
</script>
