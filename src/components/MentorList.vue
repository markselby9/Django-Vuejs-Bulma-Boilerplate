<template>
  <div>
    <div class="columns" v-for="group in mentorlist" v-bind:key="group[0].id">
      <div class="column" v-for="t in group" v-bind:key="t.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <header class="card-header">
            <p class="card-header-title">
              {{t.name}}
            </p>
          </header>
          <div class="card-content">
            <p>
              {{t}}
            </p>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-primary" @click="selectMentor(t.id)">Select as my mentor!</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../lib/http';
  import $profile from '../lib/profile';

  export default {
    created() {
      http.get('/mentors').then(data => {
        const mentorlist = [];
        for (let i = 0; i < data.length; i += 2) {
          if (data[i + 1] !== undefined) {
            mentorlist.push([data[i], data[i + 1]]);
          } else {
            mentorlist.push([data[i]]);
          }
        }
        this.mentorlist = mentorlist;
      }, err => {
        console.log(err);
      });
      $profile.getProfile(response => {
        this.profile = response;
      }, err => {
        console.log(err)
      });
    },
    data() {
      return {
        profile: null,
        mentorlist: []
      }
    },
    methods: {
      selectMentor(id) {
        console.log(id);
        $profile.updateSelectedMentor(id, response => {

        }, err => {

        })
      }
    }
  }
</script>
