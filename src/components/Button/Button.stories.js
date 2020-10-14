import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  label: 'Click me!'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'flat',
  label: 'Click me!'
}
