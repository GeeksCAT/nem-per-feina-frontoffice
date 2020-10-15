import { Card } from '.'

export default {
  title: 'Components/Card',
  component: Card
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<Card v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  ofert: {
    title: 'LEARN LARAVEL WITH VUE2',
    desc: 'Some additional info for this screen about validity of the ads, etc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
    location: 'DHAKA, BANGLADESH',
    thumbnail: 'https://jobs.manjurulhoque.com/static/img/featured1.jpg'
  }
}
