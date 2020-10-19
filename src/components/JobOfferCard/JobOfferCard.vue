<template>
  <Card :title="title" :image="image" :imageAlt="imageAlt">
    <template v-slot:card-content>
      <div class="JobOfferCard">
        <div class="JobOfferCard--subtitle">
          <Location :location="location" />
          <Badge :text="type" :variant="typeVariant"></Badge>
        </div>
        <div class="JobOfferCard--description">
          <p>{{description}}</p>
        </div>
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
      default () {
        return ''
      }
    },
    type: {
      type: String,
      default () {
        return 'intershipt'
      }
    },
    typeVariant: {
      type: String,
      default () {
        return 'warning'
      }
    },
    location: {
      type: String,
      default () {
        return ''
      }
    },
    description: {
      type: String,
      default () {
        return ''
      }
    },
    image: {
      type: String,
      default () {
        return 'https://picsum.photos/id/237/350/233'
      }
    },
    imageAlt: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.JobOfferCard {
  &--subtitle {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  &--description {
    color: #868e96;
    font-size: 0.9rem;
    margin-bottom: 10px;

    p {
      text-align: center;
    }
  }
}
</style>
