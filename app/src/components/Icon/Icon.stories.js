import { Icon } from '.'

export default {
  title: 'Components/Icon',
  component: Icon
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  iconName: 'geolocation',
  size: 24,
  iconColor: 'black'
}
