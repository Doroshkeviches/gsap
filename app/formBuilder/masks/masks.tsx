import type { MaskitoOptions } from '@maskito/core';

const phoneBody = [
    ' ',
    '(',
    /\d/, /\d/, /\d/,
    ')',
    ' ',
    /\d/, /\d/, /\d/,
    '-',
    /\d/, /\d/,
    '-',
    /\d/, /\d/,
];

export const faxBody = [
    /\d/,
    '-',
    /\d/, /\d/, /\d/,
    '-',
    /\d/, /\d/, /\d/,
    '-',
    /\d/, /\d/, /\d/, /\d/,
];

const sevenMask = [
    '+',
    '7',
    ...phoneBody,
];

const eightMask = [
    '8',
    ...phoneBody,
];

const digitMask = /^\d+$/;
const yearMask = /^(1{0,1}9{0,1}[5-9]{0,1}\d{0,1}|2{0,1}0{0,1}[0-5]{0,1}\d{0,1})$/;
const percentMask = /^(\d{0,2}|\d{0,2}[.,]\d{0,1}|100)$/;
const emailRegex = /^[a-zA-Z0-9.@]+$/;
const linkRegex = /^[a-zA-Zа-яА-Я0-9.:_\\/]+$/;
const digitsAndPointsMask = /^[0-9.]+$/;

export const linkMaskOptions: MaskitoOptions = {
    mask: linkRegex,
}

export const digitsANdPointMaskOptions: MaskitoOptions = {
    mask: digitsAndPointsMask,
}

export const digitsLimitMaskOptions = (digitsLimit: number): MaskitoOptions => {
    return ({ mask: new RegExp('^\\d{1,' + digitsLimit + '}$') })
};

export const phoneMaskOptions: MaskitoOptions = {
    mask: (state) => {
        return state.value.startsWith('8')
            ? eightMask
            : sevenMask;
    },
    overwriteMode: 'shift',
};

export const emailMaskOptions: MaskitoOptions = {
    mask: emailRegex,
};

export const numberMaskOptions: MaskitoOptions = {
    mask: digitMask,
};

export const yearMaskOptions: MaskitoOptions = {
    mask: yearMask,
};

export const percentMaskOptions: MaskitoOptions = {
    mask: percentMask,
};

export const faxMaskOptions: MaskitoOptions = {
    mask: faxBody,
};


