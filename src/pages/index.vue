
<template>
<div>
  <Header />
  <Button
    label="Click me!"
    @on-click="onButtonClick"
  />
  <Link
    label="Software engineer"
    destination="https://google.es"
    @on-click="onLinkClick"
  />
</div>
</template>

<script>
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Link } from '../components/Link'

export default {
  components: { Button, Header, Link },
  methods: {
    onButtonClick () {
      alert('Button have been clicked')
    },
    onLinkClick () {
      alert('Link have been clicked')
    }
  }
}
</script>

<style>
* {
  margin: 0;
}
</style>
