<template>
  <Card :title="title" :image="image" :imageAlt="imageAlt" :description="description">
    <template v-slot:card-content>
      <div class="JobOfferContent">
        <Location :location="location" />
        <Badge :text="type" :variant="typeVariant"></Badge>
      </div>
    </template>
  </Card>
</template>

<script>
import { Card } from '../Card'
import { Badge } from '../Badge'
import { Location } from '../Location'

export default {
  components: { Card, Badge, Location },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    typeVariant: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.JobOfferContent {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
