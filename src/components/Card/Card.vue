<template>
  <div class="Card">
    <img class="Card__image" :src="image" :alt="imageAlt" />

    <div class="Card__title">
      <h5>
        <a> {{ title }} </a>
      </h5>
    </div>

    <div class="Card__content">
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
  background-color: white;
  display: flex;
  flex-direction: column;
  max-width: 300px;

  &__image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    h5 {
      font-size: .875rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-family: "Montserrat",Helvetica,Arial,sans-serif;
      font-weight: 700;
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

  &__content {
    padding: 10px;
  }
}
</style>
