<template>
  <div class="Card">
    <img class="Card--image" :src="image" :alt="imageAlt" />

    <div class="Card--title">
      <h5>
        <a> {{ title }} </a>
      </h5>
    </div>

    <div class="Card--content">
      <slot name="card-content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    },
    image: {
      type: String,
      default () {
        return 'https://picsum.photos/id/237/350/233'
      }
    },
    imageAlt: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Card {
  background-color: #fff;
  display: flex;
  flex-direction: column;

  &--image {
    height: auto;
    margin-bottom: 10px;
    width: 100%;
  }

  &--title {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    h5 {
      font-family: 'Montserrat', Helvetica, Arial, sans-serif;
      font-size: .875rem;
      letter-spacing: 0.1em;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.2;
    }

    a {
      cursor: pointer;
      color: #ff7473;
      text-decoration: none;
      -webkit-transition: all .2s ease-out;
      transition: all .2s ease-out;
    }

    a:focus, a:hover {
      color: #ff2827;
      text-decoration: underline;
    }
  }
  &--content {
    padding: 10px;
  }
}
</style>
