import { useController } from "react-hook-form";
import {ComponentType,InputProps} from "@/app/formBuilder/ui/Input/Input";
import {UseControllerProps} from "react-hook-form/dist/types";
import {InputWithLabel} from "@/app/formBuilder/ui/Input/InputWithLabel";



export type ControlledInputProps<T extends ComponentType = 'text'> = Omit<
  InputProps<T>,
  "value" | "onChange" | "error"
> & UseControllerProps;

export function ControlledInput<T extends ComponentType = 'text'>(props: ControlledInputProps<T>) {
  const {
    rules,
    control,
    defaultValue,
    disabled,
    shouldUnregister,
    ...inputProps
  } = props;

  const {
    field: { ref: _, ...fieldWithoutRef },
    fieldState: { error },
  } = useController({
    name: inputProps.name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return <InputWithLabel<T> {...fieldWithoutRef} {...inputProps} error={error?.message} />;
}
