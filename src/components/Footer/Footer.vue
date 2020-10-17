<template>
  <footer class="Footer">
      <p class="FooterText">©2020 Anem per feina</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.Footer {
  width: 100vw;
  background: #34314c;
}

.FooterText {
  font-size: 0.8rem;
  font-family: "Montserrat",Helvetica,Arial,sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  max-width: 1920px;
  margin: 0 auto;
  padding: 1.5em 1em;
}
</style>
