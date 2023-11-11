import React from "react";

function Button({ text, isButtonClick, handleClick }) {
  return (
    <button
      className={isButtonClick ? "click-button" : "reset-button"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
