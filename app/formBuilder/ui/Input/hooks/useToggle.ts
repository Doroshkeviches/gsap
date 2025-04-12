import { useState } from 'react';

type UseToggleReturn = [ boolean, (value?: boolean) => void ];

export function useToggle(initialValue?: boolean): UseToggleReturn {
  const [ value, setValue ] = useState<boolean>(!!initialValue);

  function toggle(value?: boolean) {
    if (value === undefined) setValue(prev => !prev);
    else setValue(value);
  }

  return [ value, toggle ];

}
