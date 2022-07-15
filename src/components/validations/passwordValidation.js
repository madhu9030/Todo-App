import React from "react";

//Password must contain at least 7 charactors
//const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const PasswordValidation = (e, setPassword, password, setErrors, errors) => {
  setPassword(e.target.value);
  console.log(password);
  debugger;
  if (password.length < 7) {
    // setErrors(
    //   errors.map((error) => {
    //     error: "Password must contain at least 7 charactors";
    //     id: "length";
    //   })
    // );
  } else {
    setErrors(errors.map((error) => (error = "")));
  }
  //   if (password.length >= 7 && !password.includes("@")) {
  //     setErrors(
  //       (e) => (e[1] = ["Password must contain '@' as special charactors"])
  //     );
  //   } else {
  //     setErrors((e) => (e[1] = [""]));
  //   }
};

export default PasswordValidation;
