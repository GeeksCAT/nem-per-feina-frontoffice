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
  background: #746ea9;
  width: 100vw;
}

.NavBar {
  margin: 0 auto;
  max-width: 1920px;
  padding: 0.5em 1em;
  width: 100%;
}

.Logo {
  display: inline-block;
  margin-right: 1rem;
}
</style>
