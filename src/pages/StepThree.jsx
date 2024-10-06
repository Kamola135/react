import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppButton from "../components/AppButton";

const StepThree = () => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
  };

  const isButtonDisabled = selectedVariant === null;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <AppHeader
            headerType="h2"
            headerText="3. Занимательный вопрос"
          />
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <ul className="emoji-variants">
            {[1, 2, 3, 4].map((variant) => (
              <li className="variant-wrapper" key={variant}>
                <input
                  required
                  type="radio"
                  name="variant"
                  id={`variant-${variant}`}
                  value={variant}
                  onChange={handleVariantChange}
                />
                <label htmlFor={`variant-${variant}`}>
                  <img src={`./img/variant-${variant}.png`} alt={`variant-${variant}`} />
                  <p>Ваш ответ {variant}</p>
                </label>
              </li>
            ))}
          </ul>
          <AppButton
            buttonText="Далее"
            isDisabled={isButtonDisabled}
            buttonClick={() => {
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
