import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input, InputInnerElementProps } from '@/ui-kit/Input/Input';
import { usePassowordInput, UsePassowordInputReturn } from '@/ui-kit/Input/hooks/usePassowordInput';

const meta = {
  title: 'hooks/usePasswordInput',
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: 'Default',
  args: {},
};

function TestComponent() {
  const [ value, setValue ] = useState<string>('');

  const { type, isShown, toggle } = usePassowordInput(false);

  return (
    <>
      <Input
        value={value}
        label={'Password"ish input'}
        type={type}
        elRight={(innerProps) => <Toggler toggle={toggle} isShown={isShown} {...innerProps}/>}
        onChange={e => setValue(e.target.value)}
      />
      <p>Value: {value}</p>
    </>
  );
}

function Toggler({ toggle, disabled, isShown }: InputInnerElementProps & Omit<UsePassowordInputReturn, 'type'>) {
  return (
    <button onClick={() => toggle()} disabled={disabled}>
      {isShown ? 'hide' : 'show'}
    </button>
  );
}
