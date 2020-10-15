<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <a href="/" class="navbar-brand">
          <img
            src="@/assets/img/logotip-anem-per-feina.png"
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
.header {
  width: 100%;
}

.navbar {
  background: #746ea9;
}

.container {
  width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  margin-right: auto;
  margin-left: auto;
}

.navbar-brand {
  display: inline-block;
  margin-right: 1rem;
}
</style>
