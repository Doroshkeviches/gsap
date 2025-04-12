import React, {
  ComponentProps,
  JSXElementConstructor, ForwardedRef,
} from 'react';
import s from './input.module.scss';
import clsx from 'clsx';

//import { S } from "./Input.styled";

const convertToNumberWithSpaces = (value: string): string => {
  const currentValue = !!value?.trim() && value.split(/\s/)
    .join('');
  if (!currentValue) return value;

  const isNumber = /^\d+$/.test(currentValue);
  if (!isNumber) return value;

  return new Intl.NumberFormat('ru-RU').format(+currentValue);
};

interface ElementTypes {
  text: ComponentProps<'input'>;
  password: ComponentProps<'input'>;
  textarea: ComponentProps<'textarea'>;
  number: ComponentProps<'input'>;
}

interface HtmlElTypes {
  text: HTMLInputElement;
  password: HTMLInputElement;
  textarea: HTMLTextAreaElement;
  number: HTMLTextAreaElement;
}

export type ComponentType = 'text' | 'textarea' | 'password' | 'number';

export type InputProps<C extends ComponentType = 'text'> = {
  label: string;
  error?: string;
  value?: string;
  description?: string;
  elLeft?: JSXElementConstructor<InputInnerElementProps>;
  elRight?: JSXElementConstructor<InputInnerElementProps>;
  type?: C;
  inputRef?: ForwardedRef<HtmlElTypes[C]>;
} & ElementTypes[C];

export interface InputInnerElementProps {
  value?: string;
  disabled?: boolean;
}
export const Input = <C extends ComponentType = 'text'>(props: InputProps<C>) => {
  const {
    inputRef,
    label,
    value,
    type = 'text',
    error,
    description,
    disabled,
    elLeft: ElLeft, elRight: ElRight,
    required,
    ...rest
  } = props;

  const textareaClass = type === "textarea" && s["textarea-wrapper"]
  return (
    <div className={clsx(s.container)}>
      <label className={clsx(s["input-wrapper"], textareaClass, 'border-radius-16', 'p3', !!error && s['has-error'])}>
        {label && (
          <p
            className={clsx(
              value && s['active'],
              s['label'],
              'p5',
            )}
          >
            {label} {required && <span>*</span>}
          </p>
        )}
        {ElLeft && <ElLeft value={value} disabled={disabled} />}
        {
          type === 'textarea'
            ? <textarea
              ref={inputRef as ForwardedRef<HTMLTextAreaElement>}
              className={s['textarea']}
              maxLength={255}
              value={value}
              {...rest as ElementTypes['textarea']}
            />
            : <input
              ref={inputRef as ForwardedRef<HTMLInputElement>}
              type={type}
              value={value}
              onWheel={event => event.currentTarget.blur()}
              className={s['input']}
              {...rest as ElementTypes['text']}
            />
        }
        {ElRight && <ElRight value={value} disabled={disabled} />}
      </label>
      {
        type === 'textarea' && (<p className={clsx(s['description'], s['margin-top'], 'p5')}>
          Максимальная длина сообщения — 255 символов
        </p>
        )}
      {description && (
        <p className={clsx(s['description'], s['margin-top'], 'p4')}>
          { }
          {description}
        </p>
      )}
      <p className={s['margin-top']}>{error}</p>
    </div>
  );
};
