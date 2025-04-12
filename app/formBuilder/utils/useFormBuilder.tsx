'use client'
import React, {useRef} from 'react';
import Form from "@/app/formBuilder/ui/Form";
import {FieldValues} from "react-hook-form";
import {MaskitoOptions} from "@maskito/core";
import {Schema} from "zod";

type IFieldType = 'string' | "checkbox" | "password";

export interface Field {
    type?: IFieldType
    name: string;
    mask?: MaskitoOptions,
    validate?: (value: string) => boolean;
    isMaskedInput?: boolean;
    label?: string;
    placeholder?: string;
}

interface FormBuilder<T> {
    setOnSubmit: (onSubmit: onSubmitFunction<T>) => FormBuilder<T>
    addField: (field: Field) => FormBuilder<T>
    build: () => React.ReactNode,
    resetRef: () => void
}
type onSubmitFunction<T> = (fields: FieldValues) => void;

interface IUseFormBuilderProps {
    zodSchema?: Schema
}
const UseFormBuilder = <T extends Record<string, string>>({zodSchema}: IUseFormBuilderProps) => {
    const fieldsRef = useRef<Field[]>([])
    const submitRef = useRef<onSubmitFunction<T>>()

    const builder: FormBuilder<T> = {
        addField: ({type = 'string',placeholder,label, name, validate, mask, isMaskedInput = !!mask}: Field) => {
            fieldsRef.current.push({
                type,
                name,
                validate,
                isMaskedInput: isMaskedInput,
                mask,
                label,
                placeholder
            })
            return builder
        },
        setOnSubmit: (onSubmit) => {
            submitRef.current = onSubmit
            return builder
        },
        build: () => {
            if (!submitRef.current) {
                throw new Error('Submit function not defined');
            }
            return (
                <Form fields={fieldsRef.current} onSubmitHandler={submitRef.current} schema={zodSchema}/>
            )
        },
        resetRef: () => {
            fieldsRef.current = []
            submitRef.current = undefined
        }
    }
    return builder;
};

export default UseFormBuilder;