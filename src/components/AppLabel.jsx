import React from "react";

const AppLabel = ({LabelText, isRequired, inputType, id, inputPlaceHolder, hasError, errorText})=> {
    return(
        <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
        {LabelText}
        <input
          required = {isRequired}
          type={inputType}
          name={id}
          id={id}
          placeholder={inputPlaceHolder}
        />
       {hasError && <span id="error-message">{errorText}</span>} 
      </label>
    )
}
export default AppLabel;