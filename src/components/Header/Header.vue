<template>
  <header class="Header">
    <nav class="NavBar">
      <a href="/" class="Logo">
        <img
          src="../../assets/img/logotip-anem-per-feina.png"
          alt="Logotip Anem per feina"
        />
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
.Header {
  width: 100vw;
  background: #746ea9;
}

.NavBar {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.5em 1em;
}

.Logo {
  display: inline-block;
  margin-right: 1rem;
}
</style>
