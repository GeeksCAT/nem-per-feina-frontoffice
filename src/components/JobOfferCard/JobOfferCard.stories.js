import { JobOfferCard } from '.'

export default {
  title: 'Components/JobOfferCard',
  component: JobOfferCard
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JobOfferCard },
  template: '<JobOfferCard v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  title: 'LEARN LARAVEL WITH VUE2',
  type: 'intershipt',
  typeVariant: 'warning',
  location: 'DHAKA, BANGLADESH',
  description: 'Some additional info for this screen about validity of the ads, etc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
  image: 'https://picsum.photos/id/237/350/233',
  imageAlt: 'test'
}
