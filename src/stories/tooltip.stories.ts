import { Meta, StoryFn } from '@storybook/angular';
import { TooltipComponent } from '../app/tooltip/tooltip.component';

export default {
    title: 'Tooltip',
    component: TooltipComponent,
} as Meta;

const Template: StoryFn<TooltipComponent> = (args: TooltipComponent) => ({
    component: TooltipComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    // Hier kannst du die Standardwerte für die Argumente festlegen, falls erforderlich
};
