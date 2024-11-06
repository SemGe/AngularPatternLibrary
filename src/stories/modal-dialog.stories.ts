import { Meta, moduleMetadata } from '@storybook/angular';
import { ModalDialogComponent } from '../app/modal-dialog/modal-dialog.component';

export default {
  title: 'ModalDialog',
  component: ModalDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [ModalDialogComponent],
    }),
  ],
} as Meta;

export const Default = () => ({
  component: ModalDialogComponent,
});
