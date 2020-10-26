
<template>
<div>
  <Button
    label="Click me!"
    @on-click="onButtonClick"
  />
  <Link
    label="Software engineer"
    destination="/test"
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
import { Icon } from '../components/Icon'
import { Link } from '../components/Link'

export default {
  components: { Button, Link, Icon },
  methods: {
    onButtonClick () {
      alert('Button have been clickede2332')
    }
  }
}
</script>

<style>
* {
  margin: 0;
}
</style>
