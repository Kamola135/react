import React, { useState } from "react";
import Header from "../components/AppHeader";
import AnswerLabel from "../components/AnswerLabel";
import AppButton from "../components/AppButton";
import { progressBar } from "../components/progressbar";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/step-three");
  };

  const variants = [
    { id: "variant-1", courseName: "Frontend" },
    { id: "variant-2", courseName: "Python" },
    { id: "variant-3", courseName: "Data Analytics" },
    { id: "variant-4", courseName: "пупупу" },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <progressBar currentStep={2} />
          <div className="question">
            <Header headerType="h2" headerText="Какой курс вас интересует?" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerLabel
                  id={elem.id}
                  answerLabel={elem.courseName}
                  key={elem.id}
                  labelChange={() => setCourse(elem.courseName)}
                />
              ))}
            </ul>
            <AppButton
              isDisabled={!course}
              buttonText="Далее"
              buttonClick={goToNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
