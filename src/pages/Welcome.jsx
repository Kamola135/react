import React from "react";
import AppHeader from "../components/AppHeader";
import AppLabel from "../components/AppLabel";
import AppButton from "../components/appButtom";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader headerType="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра"/>
          {/* <h1>Добро пожаловать в квиз от лучшего учебного центра</h1> */}
          <form className="welcome__form">
            <AppLabel LabelText="Ваше имя" isRequired={true} inputType="text" id="id" inputPlaceHolder="Ваш ответ" hasError={true} errorText="Введите имя в правильном формате"/>

           {/*} <label className="input-wrapper" htmlFor="username">
              Ваше имя
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>*/}
           <AppLabel LabelText="Ваш номер" isRequired={true} inputType="tel" id="id" inputPlaceHolder="+998 9- --- -- --" hasError={true} errorText="Введите номер в правильном формате"/>
           {/*} <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
            <AppButton buttonText="Далее" buttonType="submit" isDisabled={true}/>
           {/* <button disabled type="submit" id="next-btn">
              Далее
            </button>*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
