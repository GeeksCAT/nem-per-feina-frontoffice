<template>
  <div class="card">
    <a href="#">
      <div>
        <div class="image">
          <img :src="ofert.thumbnail" alt="">
        </div>
      </div>
    </a>
    <div class="content-card">
      <h5>
        <a href="#">{{ofert.title | capitalize}}</a>
      </h5>
      <p>
        {{ofert.location}}
        <span class="featured-badge">Full time</span>
      </p>
      <p>{{ofert.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ofert: {
      type: Object,
      default () {
        return {
          title: '',
          desc: '',
          location: '',
          thumbnail: ''
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content-card {
  padding: 15px 15px 0 15px;
  text-align: center;
  background-color: white;

  .featured-badge {
    background-color: #5cb85c;
    font-weight: 300;
    border-radius: 3px;
    margin-left: 5px;
    padding: 5px;
    color: #fff;
  }

  a {
    color: #ff7473;
    text-decoration: none;
  }

  p {
    color: #868e96;
  }
}

.image {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
