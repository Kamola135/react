import React, { useContext, useEffect, useState } from "react";
import AppHeader from "../components/AppHeader"; 
import AppLabel from "../components/AppLabel"; 
import AppButton from "../components/AppButton"; 
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/themeContext";

const Welcome = () => {
  const navigate = useNavigate();
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("theme", theme);

  
  const goToNextPage = () => {
    navigate("/step-two");
  };

  const handleClick = () => {
    const isNameError = !nameRegex.test(nameValue);
    const isPhoneError = !phoneRegex.test(phoneValue);
    
    setNameError(isNameError);
    setPhoneError(isPhoneError);
  
    if (!isNameError && !isPhoneError) {
      goToNextPage();
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
    <div className={`container ${theme === themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <button onClick={toggleTheme}>Смена темы</button>
          <AppHeader
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              errorText="Введите Имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelChange={setNameValue}
              labelValue={nameValue}
              hasError={nameError}
            />
            <AppLabel
              labelText="Ваш номер"
              errorText="Введите номер в правильном формате"
              id="phone"
              hasError={phoneError}
              isRequired={true}
              labelChange={setPhoneValue}
              labelValue={phoneValue}
              inputPlaceholder="+998 9- --- -- -- "
              inputType="text"
            />

            <AppButton
              isDisabled={checkBtn}
              buttonClick={handleClick}
              buttonText="Далее"  
            />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
