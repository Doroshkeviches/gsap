const INVALID_FORMAT_TEXT = 'Неверный формат';
const REQUIRED_TEXT = 'Поле обязательно для заполнения';
const INVALID_YEAR = 'Введите год в диапазоне 1950-2050';

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
export const PHONE_REGEX = /^[+]?[87] [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
export const NUMBER_INPUT_REGEX = /^[0-9]+$/;
export const YEAR_INPUT_REGEX = /^(19[5-9][0-9]|20[0-4][0-9]|2050)$/;
export const PERCENT_INPUT_REGEX = /^(\d{0,2}|\d{0,2}[.,]\d{0,1}|100)$/;
export const ONLY_LETTERS_REGEX = /^[А-Яа-я\s\-]+$/;
export const FAX_FORMAT_REGEX = /^\d-\d{3}-\d{3}-\d{4}$/;
export const POINT_REGEX = /.+\..+/



