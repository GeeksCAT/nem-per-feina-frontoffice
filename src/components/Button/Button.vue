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
    font-size: 1rem;
    font-family: "Montserrat",Helvetica,Arial,sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    cursor: pointer;
    padding: 0.5em 1em;
    outline: none;
    border: 1px solid rgb(255, 116, 115);
    border-radius: 0.25em;
    transition-property: background, border-color;
    transition-duration: 300ms;

    &--variant {
      &-primary {
        color: #fff;
        background: rgb(255, 116, 115);

        &:hover {
          background: rgb(253, 162, 161);
          border-color: rgb(253, 162, 161);
        }
      }

      &-flat {
        color: rgb(255, 116, 115);
        background: transparent;

        &:hover {
          background: rgba(253, 162, 161, 0.3);
        }
      }
    }
  }
</style>
