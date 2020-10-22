<template>
  <div class="Location">
    <p>{{location}}</p>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Location {
  p {
    color: #868e96;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 300;
  }
}
</style>
