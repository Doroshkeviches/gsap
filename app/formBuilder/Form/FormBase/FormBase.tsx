import { ReactNode, useState } from "react";
import {
  FieldValues,
  FormProvider,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";

/** pending - отображаем форму
 * success - отображаем "форма успешно отправлена"
 * error - отображаем "ошибка при отпрвавке формы"
 */
type TStatusForm = "pending" | "success" | "error";

type FormBaseProps<FormType extends FieldValues> = {
  /**
   * функция которая возвращает промис с результатом запроса
   */
  onSubmit: (data: FormType) => Promise<Response>;
  /**
   * рендер функция success component
   */
  success: (resetStatus: () => void, resetForm: () => void) => ReactNode;
  /**
   * рендер функция error component
   */
  error: (resetStatus: () => void) => ReactNode;
  /**
   * сожержимое/поля формы
   */
  children: ReactNode;
  /**
   * пропсы для хука useForm
   */
} & ({
  useFormProps: UseFormProps<FormType, any>;
  formHook?: never;
} | {
  useFormProps?: never;
  formHook: UseFormReturn<FormType>;
})

export interface FormError<FormType> {
  message: string;
  errors: Record<keyof FormType, string[]>;
}

const mockBackendErrors: Record<string, string> = {
  'validation.required': 'Поле является обязательным',
  'validation.email': 'Неверный email'
}

export function FormBase<FormType extends FieldValues>(
  props: FormBaseProps<FormType>
) {
  const { onSubmit, error, success, children, useFormProps, formHook } = props;

  const [statusForm, setStatusForm] = useState<TStatusForm>("pending");
  const newForm = useForm<FormType>(useFormProps) // без этого падает ошибка, что нужно вызывать useForm на каждом рендере а не условно через ?? или ||
  const form = formHook || newForm;

  function handleSubmitBase(data: FormType) {
    return onSubmit(data)
      .then((res) => {
        switch (true) {
          case res.status >= 200 && res.status < 300:
            resetForm();
            setStatusForm('success');
            return;
          case res.status >= 400 && res.status < 500:
            return handleError(res);
          default:
            return setStatusForm('error');
        }
      })
      .catch((err) => {
        setStatusForm('error');
      });
  }

  async function handleError(res: Response) {
    const json = await res.json().catch(() => null);
    if (!json) {
      return setStatusForm('error');
    }
    const errorData = json as FormError<FormType>;
    const messages = Object.entries(errorData.errors) as [keyof FormType, string[]][];
    if (!messages.length) {
      return setStatusForm('error');
    }

    messages.forEach(([field, errors]) => {
      const backendMessage = errors[0];
      const message  =backendMessage in mockBackendErrors ? mockBackendErrors[backendMessage] : backendMessage
      form.setError(field as any, { message });
    });
  }

  const resetStatus = () => {
    setStatusForm("pending");
  };

  const resetForm = () => {
    form.reset();
  };

  return (
    <>
      {statusForm === "pending" && (
        <form onSubmit={form.handleSubmit(handleSubmitBase)} className={"flex flex-col gap-1"}>
          <FormProvider {...form}>{children}</FormProvider>
        </form>
      )}
      {statusForm === "success" && success(resetStatus, resetForm)}
      {statusForm === "error" && error(resetStatus)}
    </>
  );
}
