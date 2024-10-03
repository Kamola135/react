import React from "react";
import AppHeader from "../components/AppHeader";
import AppLabel from "../components/AppLabel";
import AppButton from "../components/AppButton";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <AppHeader headerText="1. Занимательный вопрос" headerType="h2"/>
            {/* <h2>1. Занимательный вопрос</h2> */}
            <AppLabel 
              LabelText="" 
              isRequired={true} 
              inputType="text" 
              id="answer" 
              inputPlaceHolder="Ваш ответ" 
              hasError={true} 
              errorText="Введите номер в правильном формате"
            />
            {/* <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label> */}
            <AppButton buttonText="Далее" buttonType="button" />
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
