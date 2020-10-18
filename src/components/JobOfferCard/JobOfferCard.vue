<template>
  <Card :title="title" :image="image" :imageAlt="imageAlt">
    <template v-slot:card-content>
      <div class="JobOfferCard">
        <div class="JobOfferCard__subtitle">
          <Location :location="location" />
          <Badge :text="type" :variant="typeVariant"></Badge>
        </div>
        <div class="JobOfferCard__description">
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
  &__subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  &__description {
    color: #868e96;
    font-size: 0.9rem;
    margin-bottom: 10px;
    p {
      text-align: center;
    }
  }
}
</style>
