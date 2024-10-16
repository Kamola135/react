import React from "react";

export const progressBar = ({ currentStep }) => {
  const variants= [1, 2, 3, 4];
    return( 
        <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              {variants.map((elem, idx)=>(
                <div key={idx} className={`indicator_unit indicator_unit-1 ${currentStep>idx && "_active"} `}></div>
              ))}
            </div>
          </div>
    );
};