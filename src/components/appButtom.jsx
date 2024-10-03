import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

const AppButton = ({buttonText, buttonType, }) => {
    return(
        <button disabled={isDisabled} type={buttonType} id="next-btn">
        {buttonText}
      </button>
    )
}
export default AppButton;