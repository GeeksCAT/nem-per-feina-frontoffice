<template>
  <div>
    <Header/>
    <slot></slot>
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
