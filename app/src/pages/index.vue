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

const type = {
  1: 'warning',
  2: 'good'
}

export default {
  components: { JobOfferCard },
  async asyncData ({ $http }) {
    const res = await $http.get('/api/jobs')
    const data = await res.json()
    return {
      offers: data.map((offer) => {
        offer.type = type[offer.type]
        return offer
      })
    }
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
