import React from "react";

const AppButton = ({ 
  buttonText, 
  buttonType, 
  isDisabled, 
  buttonClick,
 }) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
      id="next-btn"
      onClick={buttonClick}
    >
      {buttonText}
    </button>
  );
};
export default AppButton;