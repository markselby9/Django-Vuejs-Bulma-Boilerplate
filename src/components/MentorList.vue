<template>
  <div>
    <div class="columns" v-for="group in mentorlist" v-bind:key="group[0].id">
      <div class="column" v-for="t in group" v-bind:key="t.id">
        <div class="card">
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
              <a class="button is-primary">Select as my mentor!</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../lib/http';

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
      });
    },
    data() {
      return {
        mentorlist: []
      }
    }
  }
</script>
