import React from "react";
import "./inputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="InputOption">
      <Icon style={{ color: color }} />
      <h3>{title}</h3>
    </div>
  );
}

export default InputOption;
