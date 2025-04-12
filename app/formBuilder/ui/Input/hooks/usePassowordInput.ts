import { useToggle } from '@/ui-kit/Input/hooks/useToggle';

export interface UsePassowordInputReturn {
  type: 'text' | 'password';
  toggle: (value?: boolean) => void;
  isShown: boolean;
}


export function usePassowordInput(isInitiallyShown?: boolean): UsePassowordInputReturn {
  const [ isShown, toggle ] = useToggle(isInitiallyShown);

  return {
    type: isShown ? 'text' : 'password',
    toggle,
    isShown,
  };
}
