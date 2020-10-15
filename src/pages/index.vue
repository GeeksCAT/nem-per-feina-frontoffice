
<template>
  <Button
    label="Click me!"
    @on-click="onButtonClick"
  />
</template>

<script>
import { Button } from '../components/Button'

export default {
  components: { Button },
  methods: {
    onButtonClick () {
      alert('Button have been clicked')
    }
  }
}
</script>
