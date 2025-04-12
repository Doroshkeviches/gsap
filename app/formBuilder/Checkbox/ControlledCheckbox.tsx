import { useController } from 'react-hook-form';
import { UseControllerProps } from 'react-hook-form/dist/types';
import {Checkbox, CheckboxProps} from "@/app/formBuilder/Checkbox/Checkbox";

export type ControlledCheckboxProps = Omit<CheckboxProps, 'checked' | 'onChange'> & UseControllerProps;

export function ControlledCheckbox(props: ControlledCheckboxProps) {

  const {
    rules,
    control, defaultValue, disabled, shouldUnregister,
    ...rest
  } = props;

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name: rest.name,
    control, defaultValue, rules, shouldUnregister,
  });

  return (
    <Checkbox
      {...rest}
      error={error?.message}
      checked={value}
      onChange={e => onChange(e.target.checked)}
    />
  );
}
