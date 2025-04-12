import { Input } from '@/ui-kit/Input/Input';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'ui/Input',
  component: Input,
  args: {
    label: 'Label',
    required: true,
    description: 'description',
  },
  decorators: [
    (Story, ctx) => {
      const [ value, setValue ] = useState(ctx.args.value);
      return (
        <Story args={{ ...ctx.args, value, onChange: (e: any) => setValue(e.target.value) }}/>
      );
    },
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: 'Default',
  args: {},
};

export const WithRightSmth: Story = {
  args: {
    elRight: PercentSign,
  },

};

function PercentSign() {
  return <p>%</p>;
}

