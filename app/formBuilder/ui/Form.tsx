import React from 'react';
import {Field} from "@/app/formBuilder/utils/useFormBuilder";
import {Controller, FieldValues, useForm} from "react-hook-form";
import s from './form.module.scss'
import {Input} from "@/components/ui/input";
import {ControlledInput} from "@/app/formBuilder/ui/Input/ControlledInput";
import {FormResponse} from "@/app/formBuilder/Form/FormResponse/FormResponse";
import {FormBase} from "@/app/formBuilder/Form/FormBase/FormBase";
import {ControlledInputWithMask} from "@/app/formBuilder/ui/Input/ControlledInputWithMask";
import {ControlledCheckbox} from "@/app/formBuilder/Checkbox/ControlledCheckbox";
import {REQUIRED_VALIDATE} from "@/app/formBuilder/validation/validation";
import ControlledPasswordInput from "@/app/formBuilder/ui/Input/ControlledPasswordInput";
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {Schema} from "zod";

interface FormProps<T> {
    fields: Field[],
    onSubmitHandler: (data: FieldValues) => Promise<Response>,
    schema: Schema,
}

const Form = <T extends Record<string, string>>({fields, onSubmitHandler,schema}: FormProps<T>) => {

    return (
        <FormBase
            onSubmit={onSubmitHandler}
            useFormProps={{
                mode: "onSubmit",
                resolver: zodResolver(schema)
            }}
            success={(resetStatus, resetForm) => (
                // <FormResponse
                //     isSuccess={true}
                //     onCLick={() => {
                //         resetStatus();
                //         resetForm();
                //     }}
                // />
                <div>SECCESS</div>
            )}
            error={(resetStatus) => (
                <div>ERROR</div>

                // <FormResponse isSuccess={false} onCLick={resetStatus} />
            )}
        >
            {fields.map((field, i) => {
                const commonProps = {
                    key: `${field.type}-${i}`,
                    name: field.name,
                    label: field.label,
                    mask: field.mask,
                    placeholder: field.placeholder,
                };
                switch (field.type) {
                    case "checkbox":
                        return (<>
                            <ControlledCheckbox {...commonProps}
                                                rules={REQUIRED_VALIDATE}/>
                        </>)
                    case "string":
                        switch (field.isMaskedInput) {
                            case true:
                                return (
                                    <ControlledInputWithMask  {...commonProps}/>
                                )
                            case false:
                                return (
                                    <ControlledInput {...commonProps}/>
                                )
                        }
                        case "password":
                            return (
                                <ControlledPasswordInput {...commonProps}/>
                            )
                }
            })}
            <Button type={"submit"}>Submit</Button>

        </FormBase>
    );
};

export default Form;