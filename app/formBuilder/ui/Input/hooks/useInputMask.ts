import { MaskitoOptions } from '@maskito/core';
import { useMaskito } from '@maskito/react';

// https://maskito.dev/recipes/placeholder
// https://maskito.dev/core-concepts/transformer
export function useInputMask(options: MaskitoOptions, onChange: (value: string) => void) {
  const inputRef = useMaskito({ options });

  function handleInput(e: any) {
    onChange(e.currentTarget.value);
  }

  return {
    inputRef,
    onInput: handleInput,
  };
}
