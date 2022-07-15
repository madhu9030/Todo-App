import React from "react";
import "./button.scss";

const Button = ({
  buttonLink,
  label,
  handlers,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      {...handlers}
      type={type}
      disabled={disabled}
      className={`button animation${buttonLink ? " button-link" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
