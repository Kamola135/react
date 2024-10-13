import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppButton from "../components/AppButton";
import { progressBar } from "../components/progressbar";
import { useNavigate } from "react-router-dom";

const StepThree = () => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const navigate = useNavigate();

  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
  };

  const goToNextPage = () => {
    navigate("/step-four");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <AppHeader headerType="h2" headerText="3. Занимательный вопрос" />
          <progressBar currentStep={3} />
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
            isDisabled={selectedVariant === null}
            buttonText="Далее"
            buttonClick={goToNextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
