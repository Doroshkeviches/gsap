import { Checkbox } from '@/ui-kit/Checkbox/Checkbox';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Checkbox',
  component: Checkbox,
  args: {
    checked: false,
    disabled: false,
    error: '',
    name: 'test'
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  name: 'Default',
  args: {
    children: <>
      <p>Hello-world <br/> <span style={{ color: 'blue' }}>Message</span></p>
    </>,
  },
};
