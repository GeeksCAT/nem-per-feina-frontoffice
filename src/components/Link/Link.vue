<template>
  <h5>
    <n-link class="Link"
      :to="destination">
      {{ label }}
    </n-link>
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
  }
}
</script>

<style scoped lang="scss">
.Link {
  color: #ff7473;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-decoration: none;
  text-transform: uppercase;

  &:focus,
  &:hover {
    color: #ff2827;
    text-decoration: underline;
  }
}
</style>
