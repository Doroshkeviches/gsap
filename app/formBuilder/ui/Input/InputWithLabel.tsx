import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {ComponentProps, ForwardedRef, JSXElementConstructor} from "react";
import {InputInnerElementProps} from "@/app/formBuilder/ui/Input/Input";
import ErrorMessage from "@/app/formBuilder/ui/ErrorMessage/ErrorMessage";

export type ComponentType = 'text' | 'textarea' | 'password' | 'number';
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

export function InputWithLabel(props:InputProps) {
    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={props.name}>{props.label}</Label>
            <Input {...props} />
            <ErrorMessage error={props.error} />
        </div>
    )
}
