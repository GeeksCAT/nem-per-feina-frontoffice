
<template>
<div>
  <app-header />
   <Button
    label="Click me!"
    @on-click="onButtonClick"
  />
</div>
</template>

<script>
import { Button } from '../components/Button'
import { Header } from '../components/Header'

export default {
  components: { Button, 'app-header': Header },
  methods: {
    onButtonClick () {
      alert('Button have been clicked')
    }
  }
}
</script>

<style>
* {
  margin: 0 !important;
}
</style>
