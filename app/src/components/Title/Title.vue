<template>
  <div class="TitleContainer">
    <slot></slot>
    <div class="UnderlineContainer">
     <div class="Underline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style scoped lang="scss">
.TitleContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.UnderlineContainer {
  font-size: 1rem;
  padding: 1em 0;
}

.Underline {
  background: #ff7473;
  font-size: 1rem;
  height: 0.25em;
  width: 100px;
}
</style>
