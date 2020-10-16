<template>
    <span :class="classes">
        {{ text }}
    </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary',
      validator:
        value => [
          'primary',
          'secondary',
          'success',
          'error',
          'warning',
          'danger',
          'light',
          'dark'
        ].includes(value)
    }
  },

  computed: {
    classes () {
      return {
        badge: true,
        [`badge--${this.variant}`]: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .badge {
        text-transform: uppercase;
        font-family: "Montserrat",Helvetica,Arial,sans-serif;
        font-size: 0.65rem;
        padding: 5px;
        font-weight: 500;
        color: #fff;
        border-radius: 3px;
        margin-left: 5px;
        letter-spacing: 0.1rem;

        &--primary {
            background-color: #ff7473;
        }

        &--secondary {
            background-color: #868e96;
        }

        &--success {
            background-color: #5cb85c;
        }

        &--info {
            background-color: #17a2b8;
        }

        &--warning {
            background-color: #ffc107;
        }

        &--danger {
            background-color: #dc3545;
        }

        &--light {
            background-color: #fafafa;
        }

        &--dark {
            background-color: #343a40;
        }
    }
</style>
