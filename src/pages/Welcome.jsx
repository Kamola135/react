import React, { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";
import AppLabel from "../components/AppLabel";
import AppButton from "../components/AppButton";

const Welcome = () => {
  const phoneRegex =
    /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleClick = () => {
    if (!nameRegex.test(nameValue)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!phoneRegex.test(phoneValue)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  useEffect(() => {
    if (nameValue && phoneValue) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  }, [nameValue, phoneValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              hasError={nameError}
              errorText="Введите имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelValue={nameValue}
              labelChange={setNameValue}
            />
            <AppLabel
              labelText="Ваш номер телефона"
              errorText="Введите номер в правильном формате"
              id="phone"
              hasError={phoneError}
              isRequired
              inputPlaceholder="+998 9- --- -- --"
              inputType="number"
              labelValue={phoneValue}
              labelChange={setPhoneValue}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
