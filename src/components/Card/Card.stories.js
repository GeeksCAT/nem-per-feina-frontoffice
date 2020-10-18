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
  title: 'LEARN LARAVEL WITH VUE2',
  imageAlt: 'test',
  image: 'https://picsum.photos/id/237/350/233'
}
