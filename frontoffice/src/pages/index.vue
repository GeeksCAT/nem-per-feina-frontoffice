
<template>
<div>
  <Header />
  <Button
    label="Click me!"
    @on-click="onButtonClick"
  />
  <Icon
    iconName="geolocation"
    size="24"
    iconColor="black"
  />
</div>
</template>

<script>
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Icon } from '../components/Icon'

export default {
  components: { Button, Header, Icon },
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
