import { useInputMask } from '@/ui-kit/Input/hooks/useInputMask';
import { useState } from 'react';
import { maskitoWithPlaceholder } from '@maskito/kit';
import { MaskitoOptions } from '@maskito/core';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/ui-kit/Input/Input';
import { useMaskito } from '@maskito/react';

const meta = {
  title: 'hooks/useInputMask',
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: 'Default',
  args: {
    options: {
      mask: /^\d{0,3}$/,
    },
  },
};

export const WithPlaceholder: Story = {
  args: {
    options: {
      ...maskitoWithPlaceholder('xxx'),
      mask: /^\d{0,3}$/,
    },
  },
};

function TestComponent({ options }: { options: MaskitoOptions }) {
  const [ value, setValue ] = useState<string>('');

  const maskSettings = useInputMask(options, setValue);

  return (
    <>
      <Input
        {...maskSettings}
        value={value}
        label={'Input mask'}
        type={'text'}
        onChange={e=>console.log(e.target.value)}
      />
      <p>Value: {value}</p>
    </>
  );
}
