<template>
  <svg
    class="Icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
  >
    <use
      :href="`#${iconName}`"
      :style="{ fill: iconColor }"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'geolocation'
    },
    size: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped lang="scss">
  .Icon {
    display: block;
    flex-shrink: 0;
    transition: fill 200ms;
  }
</style>
