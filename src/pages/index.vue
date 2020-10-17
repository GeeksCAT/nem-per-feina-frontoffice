
<template>
<div>
  <Header />
  <Button
    label="Click me!"
    @on-click="onButtonClick"
  />
  <Footer />
</div>
</template>

<script>
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default {
  components: { Button, Header, Footer },
  methods: {
    onButtonClick () {
      alert('Button have been clicked')
    }
  }
}
</script>

<style>
* {
  margin: 0;
}
</style>
