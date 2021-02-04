import React from "react";
const TextField = (
  {
    inputLabel = "Enter the value",
    buttonLabel,
    inputAttrs,
    buttonAttrs,
    labelAttrs,
    setInput,
    input,
    clickHandler,
    loading,
  },
  ref
) => {
  return (
    <div className="textfeild-wrapper">
      <input
        {...inputAttrs}
        id="123"
        className={input ? "focused textfeild-box" : "textfeild-box"}
        onChange={(e) =>
          setInput(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        value={input}
        ref={ref}
      />
      <label className="textfeild-label" {...labelAttrs}>
        {inputLabel}
      </label>
      {buttonLabel && !loading ? (
        <button
          {...buttonAttrs}
          onClick={clickHandler}
          className="textfield-button"
        >
          {buttonLabel}
        </button>
      ) : (
        <i className="spinner"></i>
      )}
    </div>
  );
};

const forwardRefInput = React.forwardRef(TextField);

export default forwardRefInput;
