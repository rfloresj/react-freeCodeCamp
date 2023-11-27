import React from "react";

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`container-button ${
        isOperator(props.children) ? "operator" : null
      }`}
    >
      {props.children}
    </div>
  );
}

export default Button;
