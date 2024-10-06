import React from "react";

const AnswerLabel = ({ id, answerLabel, labelChange }) => {
    return (
      <li className="variant-wrapper">
        <input required type="radio" name="variants" id={id} onChange={labelChange} />
        <label htmlFor={id}>{answerLabel}</label>
      </li>
    );
  };
  
  export default AnswerLabel;
  
