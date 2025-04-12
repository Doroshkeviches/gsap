'use client'
import UseFormBuilder from "@/app/formBuilder/utils/useFormBuilder";
import {phoneMaskOptions} from "@/app/formBuilder/masks/masks";
import {z} from 'zod';
import {PHONE_REGEX} from "@/app/formBuilder/validation/validation";

const Page = () => {

    const schema = z.object({
        username: z.string()
            .nonempty("Имя пользователя не может быть пустым")
            .min(2, 'Имя пользователя должно быть длиннее'),
        phone: z
            .string()
            .nonempty("Телефон обязателен")
            .regex(PHONE_REGEX, "Неверный формат телефона")
    });


    const builder = UseFormBuilder({
        zodSchema: schema,
    })
    const handleSubmit = async (fields: Record<string, string>) => {
        return new Promise(resolve => {
            console.log(fields)
            resolve({status: "200", data: fields})
        })
    }
    builder
        .addField({
            name: 'username',
            label: 'Имя пользователя'
        })
        .addField({
            name: 'phone',
            mask: phoneMaskOptions,
            label: 'Телефон'

        })
        .addField({
            type: 'password',
            name: 'password',
            placeholder: 'Секретный пароль'
        })
        .addField({
            type: 'checkbox',
            name: 'privacy',
        })

        .setOnSubmit(handleSubmit)
    const Form = builder.build()
    builder.resetRef()
    return (
        <div className="w-1/2 mx-auto">
            {Form}
        </div>
    )

};

export default Page;