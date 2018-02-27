<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
