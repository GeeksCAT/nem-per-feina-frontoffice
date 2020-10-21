import { LoremIpsum } from 'lorem-ipsum'
import { Card } from '.'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

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
  description: lorem.generateParagraphs(1),
  image: 'https://picsum.photos/id/237/350/233'
}
