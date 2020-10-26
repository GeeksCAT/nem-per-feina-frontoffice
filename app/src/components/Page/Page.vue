<template>
  <div class="Page">
    <Header/>
    <div class="PageContent">
      <slot></slot>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { Header } from '../Header'
import { Footer } from '../Footer'

export default {
  name: 'Page',
  components: { Header, Footer }
}
</script>

<style scoped lang="scss">
  .Page {
    align-items: center;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .PageContent {
    flex: 1;
    max-width: 1920px;
    width: 100%;
  }
</style>
