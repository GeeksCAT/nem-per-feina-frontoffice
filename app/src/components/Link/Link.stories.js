import { Link } from '.'

export default {
  title: 'Components/Link',
  component: Link
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Link },
  template: '<Link v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Software engineer',
  destination: '/test'
}
