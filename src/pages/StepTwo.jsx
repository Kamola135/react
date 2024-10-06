import Header from "../components/AppHeader";
import AnswerLabel from "../components/AnswerLabel";
import AppButton from "../components/AppButton";
import React, { useState } from 'react';

const StepTwo = () => {
  const [course, setCourse] = useState(null); 
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
          <progressBar />
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
            {!course ? <AppButton isDisabled /> : <AppButton isDisabled={false} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
