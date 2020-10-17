<template>
  <h5>
    <a class="Link"
      :href="destination"
      @click="$emit('on-click')">
      {{ label }}
    </a>
  </h5>
</template>

<script>
export default {
  name: 'Link',
  props: {
    label: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    }
  },
  emits: ['on-click']
}
</script>

<style scoped lang="scss">
  .Link {
    font-family: "Montserrat",Helvetica,Arial,sans-serif;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ff7473;
    text-decoration: none;

    &:focus, &:hover {
      color: #ff2827;
      text-decoration: underline;
    }
  }
</style>
