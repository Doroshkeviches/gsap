import React from 'react';
import s from './ErrorMessage.module.scss';
interface Props {
    error?: string
}
const ErrorMessage = ({error}:Props) => {
    return (
        <p className={s.error}>
            {error || '\u00A0'}
        </p>
    );
};

export default ErrorMessage;