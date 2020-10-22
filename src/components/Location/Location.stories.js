import { Location } from '.'

export default {
  title: 'Components/Location',
  component: Location
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Location },
  template: '<Location v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  location: 'dsdsds'
}
