import { Paragraph } from '.'

export default {
  title: 'Components/Paragraph',
  component: Paragraph
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Paragraph },
  template: '<Paragraph v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  text: 'This is a sample paragraph'
}

export const Small = Template.bind({})
Small.args = {
  variant: 'small',
  text: 'This is a small sample paragraph'
}
