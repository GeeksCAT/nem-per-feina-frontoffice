<template>
  <footer class="Footer">
     <div class="Content">
        <p class="FooterText">©2020 Anem per feina</p>
     </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.Footer {
  background: #34314c;
  width: 100vw;
}

.Content {
  font-size: 16px;
}

.FooterText {
  color: #fff;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 auto;
  max-width: 1920px;
  padding: 1.5em 1em;
}
</style>
