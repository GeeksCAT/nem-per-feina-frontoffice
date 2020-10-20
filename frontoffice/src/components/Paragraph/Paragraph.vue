<template>
  <p :class="classes">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      validator:
        value => [
          'small'
        ].includes(value)
    }
  },

  computed: {
    classes () {
      return {
        Paragraph: true,
        [`Paragraph--variant-${this.variant}`]: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .Paragraph {
    display: block;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    padding: 0.5em 1em;

    &--small {
      font-size: 0.8rem;
    }
  }
</style>
