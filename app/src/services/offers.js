const api = 'https://testing.nemperfeina.cat/api/jobs'

export const getAll = async ($http) => {
  const res = await $http.get(api)
  const data = await res.json()
  return {
    offers: data.map((offer) => {
      offer.type = type[offer.type]
      return offer
    })
  }
}

const type = {
  1: 'warning',
  2: 'good'
}
