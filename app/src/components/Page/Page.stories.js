import { Page } from '.'

export default {
  title: 'Components/Page',
  component: Page
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Page },
  template: '<Page v-bind="$props">test</Page>'
})

export const Default = Template.bind({})
Default.args = {
}
