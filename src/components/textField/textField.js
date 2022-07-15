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
    error,
    type,
    errorMessage,
    onBlur,
    disabled,
    id,
  },
  ref
) => {
  return (
    <div className="textfeild-wrapper">
      <input
        {...inputAttrs}
        id={id}
        disabled={disabled}
        type={type}
        className={input ? "focused textfeild-box" : "textfeild-box"}
        onBlur={(e) => onBlur(e)}
        onChange={(e) =>
          setInput(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        required
        value={input}
        ref={ref}
      />
      <label className="textfeild-label" {...labelAttrs}>
        {inputLabel}
      </label>
      {buttonLabel ? (
        !loading ? (
          <button
            {...buttonAttrs}
            onClick={clickHandler}
            className="textfield-button"
          >
            {buttonLabel}
          </button>
        ) : (
          <i className="spinner"></i>
        )
      ) : (
        ""
      )}
      {errorMessage && error ? (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i>
          {errorMessage.map((error) => (
            <span>{error}</span>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const forwardRefInput = React.forwardRef(TextField);

export default forwardRefInput;
