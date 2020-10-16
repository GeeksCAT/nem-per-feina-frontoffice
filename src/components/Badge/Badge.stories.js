import { Badge } from '.'

export default {
  title: 'Components/Badge',
  component: Badge
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template: '<Badge v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  text: 'Part time'
}

export const Success = Template.bind({})
Success.args = {
  text: 'Full time',
  variant: 'success'
}

export const Warning = Template.bind({})
Warning.args = {
  text: 'intership',
  variant: 'warning'
}
