import React from "react";
import AppHeader from "../components/AppHeader";
import AppLabel from "../components/AppLabel";
import AppButton from "../components/AppButton";
import { progressBar } from "../components/progressbar";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/step-two");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <progressBar currentStep={1} />
          <div className="question">
            <AppHeader headerText="1. Занимательный вопрос" headerType="h2" />
            <AppLabel
              labelText=""
              isRequired
              inputType="text"
              id="answer"
              inputPlaceHolder="Ваш ответ"
              hasError
              errorText="Введите ответ"
            />
            <AppButton buttonText="Далее" buttonClick={goToNextPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
