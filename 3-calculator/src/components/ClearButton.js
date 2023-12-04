import React from "react";
import "../components/ClearButton.css";

const ClearButton = (props) => (
  <div className="clear-button" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;
