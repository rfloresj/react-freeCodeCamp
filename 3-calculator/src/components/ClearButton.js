import React from "react";
import "../components/ClearButton.css";

const ClearButton = (props) => (
  <div className="clear-button">{props.children}</div>
);

export default ClearButton;
