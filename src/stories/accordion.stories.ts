import { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from '../app/accordion/accordion.component';

export default {
  title: 'Components/Accordion',
  component: AccordionComponent,
} as Meta<AccordionComponent>;

type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    content: 'Accordion content goes here',
  },
};
