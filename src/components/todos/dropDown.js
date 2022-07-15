import React, { useContext } from "react";
import TodosDispatch from "../provider";
const DropDown = ({ select, setSelect }) => {
  const selectHandler = (e) => {
    setSelect(e.target.value);
  };
  const dispatch = useContext(TodosDispatch);
  // console.log(dispatch);
  return (
    <select
      className="dropdown-selector"
      onChange={selectHandler}
      value={select}
    >
      <option>All</option>
      <option>Completed</option>
      <option>Uncompleted</option>
    </select>
  );
};

export default DropDown;
