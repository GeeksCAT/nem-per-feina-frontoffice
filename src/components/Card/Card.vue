<template>
  <div class="Card">
    <img class="Card--image" :src="image" :alt="imageAlt" />

    <div class="Card--title">
      <a class="Card--link"> {{ title }} </a>
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
  }

  &--link {
    color: #ff7473;
    cursor: pointer;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.2;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease-out;
  }

  &--link:focus,
  &--link:hover {
    color: #ff2827;
    text-decoration: underline;
  }

  &--content {
    padding: 10px;
  }
}
</style>
