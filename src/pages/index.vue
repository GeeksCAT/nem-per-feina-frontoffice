
<template>
  <div>
    <Button
      label="Click me!"
      @on-click="onButtonClick"
    />

    <Card :ofert="ofert" />
  </div>
</template>

<script>
import { Button } from '../components/Button'
import { Card } from '../components/Card'

export default {
  components: { Button, Card },
  methods: {
    onButtonClick () {
      alert('Button have been clicked')
    }
  },
  computed: {
    ofert () {
      return {
        title: 'LEARN LARAVEL WITH VUE2',
        desc: 'Some additional info for this screen about validity of the ads, etc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
        location: 'DHAKA, BANGLADESH',
        thumbnail: 'https://jobs.manjurulhoque.com/static/img/featured1.jpg'
      }
    }
  }
}
</script>
