import { Title } from '.'

export default {
  title: 'Components/Title',
  component: Title
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Title },
  template: `<Title v-bind="$props">
    <h2>FEATURED JOBS</h2>
  </Title>`
})

export const Default = Template.bind({})
