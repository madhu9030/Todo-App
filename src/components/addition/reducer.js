import React from "react";

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.payload,
          id: Math.floor(Math.random() * 100),
          done: false,
        },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "done":
      return state.map((todo) => {
        debugger;
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reducer;
