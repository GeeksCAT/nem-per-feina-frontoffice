<template>
  <header class="Header">
    <nav class="Navbar">
      <div class="Container">
        <a href="/" class="Logo">
          <img
            src="../../assets/img/logotip-anem-per-feina.png"
            alt="Logotip Anem per feina"
          />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped lang="scss">
.Header {
  width: 100%;
}

.Navbar {
  background: #746ea9;
}

.Container {
  width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  margin-right: auto;
  margin-left: auto;
}

.Logo {
  display: inline-block;
  margin-right: 1rem;
}
</style>
