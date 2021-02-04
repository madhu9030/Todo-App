import React from "react";

const DropDown = ({ select, setSelect }) => {
  const selectHandler = (e) => {
    setSelect(e.target.value);
  };
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
