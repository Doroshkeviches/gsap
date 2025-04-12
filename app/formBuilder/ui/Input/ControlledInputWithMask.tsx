import { useController } from 'react-hook-form';
import { UseControllerProps } from 'react-hook-form/dist/types';

import { MaskitoOptions } from '@maskito/core';


import { useInputMask } from './hooks/useInputMask';
import {InputWithLabel,InputProps} from "@/app/formBuilder/ui/Input/InputWithLabel";

export type ControlledInputWithMaskProps = Omit<InputProps, 'value' | 'onChange' | 'error'> & UseControllerProps & {
  mask: MaskitoOptions
};

export function ControlledInputWithMask(props: ControlledInputWithMaskProps) {
  const {
    rules,
    control, defaultValue, disabled, shouldUnregister,
    mask,
    ...inputProps
  } = props;

  const {
    field: { ref: _, onChange, ...fieldWithoutRef },
    fieldState: { error },
  } = useController({
    name: inputProps.name,
    control, defaultValue, rules, shouldUnregister,
  });

  const maskSettings = useInputMask(mask, onChange);

  return (
    <InputWithLabel
      {...inputProps}
      {...fieldWithoutRef}
      {...maskSettings}
      error={error?.message}
    />
  );
}
