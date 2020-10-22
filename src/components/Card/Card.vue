<template>
  <div class="Card">
    <img class="Image" :src="image" :alt="imageAlt" />

    <div class="Content">
      <div class="Title">
        <a class="Link"> {{ title }} </a>
      </div>

      <div>
        <slot name="card-content" />
      </div>

      <Paragraph :text="description" />
    </div>
  </div>
</template>

<script>
import { Paragraph } from '../Paragraph'

export default {
  components: { Paragraph },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.Card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.Content {
  padding: 1em;

  > * {
    margin-bottom: 1em;
  }

  > *:last-child {
    margin-bottom: 0;
  }
}

.Image {
  height: auto;
  width: 100%;
}

.Title {
  align-items: center;
  display: flex;
  justify-content: center;
}

.Link {
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

  &:focus,
  &:hover {
    color: #ff2827;
    text-decoration: underline;
  }
}
</style>
