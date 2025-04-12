import s from "./formResponse.module.scss";
import { Button } from "@/ui-kit/Button/Button";
import { Icon } from "@/ui-kit/Icon/Icon";
import clsx from "clsx";

interface FormResponseProps {
  isSuccess: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
  onCLick: () => void;
}

const SUCCESS_DATA = {
  iconName: "success",
  buttonText: "Хорошо",
  title: "Ваша заявка принята",
  description: "Мы свяжемся с вами в течение одного рабочего дня, чтобы уточнить детали.",
};

const ERROR_DATA = {
  iconName: "error",
  title: "Произошла ошибка",
  buttonText: "Отправить еще раз",
  description: "При отправке вашей заявки произошла ошибка. Пожалуйста, попробуйте еще раз.",
};

export function FormResponse(props: FormResponseProps) {
  const { isSuccess, title, description, buttonText, onCLick } = props;

  const currentText = isSuccess ? SUCCESS_DATA : ERROR_DATA;

  const currentData = {
    iconName: currentText.iconName,
    title: title || currentText.title,
    buttonText: buttonText || currentText.buttonText,
    description: description || currentText.description,
  };

  return (
    <div className={s["overlay-wrap"]}>
      <div className={s["wrap"]}>
        <Icon name={currentData.iconName as SpriteName} className={s["icon"]} />

        <h3 className={clsx(s["title"], "h3")}>{currentData.title}</h3>

        <p className={clsx(s["description"], "p3")}>{currentData.description}</p>
      </div>
      <Button className={s["button"]} onClick={onCLick}>
        <span className="c5">{currentData.buttonText}</span>
      </Button>
    </div>
  );
}
