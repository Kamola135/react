import React from "react";

const AppLabel = ({
  labelText,
  isRequired,
  inputType,
  id,
  inputPlaceholder,
  hasError,
  errorText,
  labelValue,
  labelChange,
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
      {labelText}
      <input
        required={isRequired}
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        value={labelValue}
        onChange={(e) => labelChange(e.target.value)}
      />
      {hasError && <span id="error-message">{errorText}</span>}
    </label>
  );
};

export default AppLabel;
