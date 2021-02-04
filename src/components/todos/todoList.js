import React from "react";
import "./todoList.scss";

const TodoList = ({
  todo,
  setInput,
  setTodo,
  inputRef,
  filterList,
  setEdit,
  setgeteditId,
}) => {
  const completedHandler = (e) => {
    setTodo(
      todo.map((data) => {
        if (data.id.toString() === e.target.id.toString()) {
          return { ...data, completed: !data.completed };
        }
        return data;
      })
    );
  };

  const removeTodo = (e) => {
    const removeTodo = todo.filter((data) => {
      return data.id.toString() !== e.target.id.toString();
    });
    setTodo(removeTodo);
  };

  const editHandler = (e) => {
    setgeteditId(e.target.id);
    todo.map((data) => {
      if (data.id.toString() === e.target.id.toString()) {
        setEdit(true);
        setInput(data.text);
        inputRef.current.focus();
        setTimeout(() => {
          inputRef.current.select();
        }, 100);
      }
    });
  };

  return [
    <div className="todo-list-title">Todo Lists</div>,
    <div className="todo-list-wrapper">
      {filterList.map((todo) => (
        <div id={todo.id} className="todo-list-container">
          <div className="todo-list">
            <div className={todo.completed ? "todo-completed" : ""}>
              {todo.text}
            </div>
            <span>
              <i
                id={todo.id}
                onClick={(e) => removeTodo(e)}
                className="fas fa-trash delete"
              ></i>
              <i
                onClick={(e) => completedHandler(e)}
                id={todo.id}
                className={
                  todo.completed
                    ? "fas fa-undo undo"
                    : "fas fa-check-circle completed"
                }
              ></i>
              <i
                onClick={(e) => editHandler(e)}
                className="fas fa-edit edit"
                id={todo.id}
              ></i>
            </span>
          </div>
        </div>
      ))}
    </div>,
  ];
};
export default TodoList;
