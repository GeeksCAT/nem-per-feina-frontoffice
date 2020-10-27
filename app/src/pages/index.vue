<template>
  <main class="OffersGrid">
    <JobOfferCard
      v-for="n in offers"
      :key="n.id"
      :title="n.title"
      :type="n.type"
      :typeVariant="n.type"
      :location="n.location"
      :description="n.description"
      image="https://picsum.photos/id/237/350/233"
      imageAlt="test"
    />
  </main>
</template>

<script>
import { JobOfferCard } from '../components/JobOfferCard'
import { getAll } from '../services/offers'

export default {
  components: { JobOfferCard },
  async asyncData ({ app }) {
    return await getAll(app.$http)
  }
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
