<template>
  <button
    type="button"
    :class="classes"
    @click="$emit('on-click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary',
      validator:
        value => [
          'primary',
          'flat'
        ].includes(value)
    }
  },

  emits: ['on-click'],

  computed: {
    classes () {
      return {
        Button: true,
        [`Button--variant-${this.variant}`]: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .Button {
    border: 1px solid rgb(255, 116, 115);
    border-radius: 0.25em;
    cursor: pointer;
    display: block;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    outline: none;
    padding: 0.5em 1em;
    transition-duration: 300ms;
    transition-property: background, border-color;

    &--variant-primary {
      background: rgb(255, 116, 115);
      color: #fff;
    }

    &--variant-primary:hover {
      background: rgb(253, 162, 161);
      border-color: rgb(253, 162, 161);
    }

    &--variant-flat {
      background: transparent;
      color: rgb(255, 116, 115);
    }

    &--variant-flat:hover {
      background: rgba(253, 162, 161, 0.3);
    }
  }
</style>
