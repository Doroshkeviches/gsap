import s from './checkbox.module.scss';
import { InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export type CheckboxProps = {
  children?: ReactNode;
  error?: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>

export function Checkbox(props: CheckboxProps) {
  const {
    checked,
    children,
    error,
    className,
    ...rest
  } = props;

  return (
    <label className={clsx(s['container'], error && s['error'], className)}>
      <input
        type='checkbox' className={'visually-hidden'}
        checked={checked}
        {...rest}
      />
      <div className={clsx(s['box'], 'border-radius-8')}>
        {/*<Icon name={'check'} className={checked ? s['visible'] : undefined}/>*/}
      </div>
      <div className={s['label-wrap']}>
        {children}
        <p>{error}</p>
      </div>
    </label>
  );
}
