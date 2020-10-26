
<template>
<main class="OffersGrid">
  <JobOfferCard
    v-for="n in 10"
    :key="n"
    title="LEARN LARAVEL WITH VUE2"
    type="intershipt"
    typeVariant="warning"
    location="DHAKA, BANGLADESH"
    description="Some additional info for this screen about validity of the ads, etc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
    image="https://picsum.photos/id/237/350/233"
    imageAlt="tes"
  />
</main>
</template>

<script>
import { JobOfferCard } from '../components/JobOfferCard'

export default {
  components: { JobOfferCard }
}
</script>

<style lang="scss">
* {
  margin: 0;
}

.OffersGrid {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
  padding: 2em;
  width: 100%;
}
</style>
