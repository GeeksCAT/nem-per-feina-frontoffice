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
        return 'test'
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
        return 'DHAKA, BANGLADESH'
      }
    },
    description: {
      type: String,
      default () {
        return 'Some additional info for this screen about validity of the ads, etc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.'
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
        return 'test'
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
