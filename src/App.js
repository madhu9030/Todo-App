import React, { useState, useEffect, useRef } from "react";
import WeatherEngine from "./weather/weatherEngine.jsx";
import "./App.scss";
import TextField from "./components/textField/textField.js";
import TodoList from "./components/todos/todoList";
import DropDown from "./components/todos/dropDown";
import Loading from "./components/loading/loading";
import GetRandomUser from "./components/getRamdonUser/getRandomUser";

function App() {
  //Local storage
  let localTodos = [];
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("localTodo"))) {
      localTodos = JSON.parse(localStorage.getItem("localTodo"));
      setTodo(localTodos);
      ref.current.focus();
    }
  }, []);

  const ref = useRef(null);
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [select, setSelect] = useState("All");
  const [filterList, setFilterList] = useState([]);
  const [loading, setloading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [geteditId, setgeteditId] = useState(null);

  useEffect(() => {
    window.localStorage.setItem("localTodo", JSON.stringify(todo));
  }, []);

  const dropDownHandler = () => {
    switch (select) {
      case "Completed":
        setFilterList(todo.filter((data) => data.completed === true));
        break;
      case "Uncompleted":
        setFilterList(todo.filter((data) => data.completed === false));
        break;
      default:
        return setFilterList(todo);
    }
  };

  useEffect(() => {
    dropDownHandler();
  }, [select, todo]);

  const addTodoHandler = () => {
    if (ref.current.value !== "") {
      setloading(true);
      setTimeout(() => {
        setloading(false);
      }, 200);

      if (edit && geteditId) {
        setTodo(
          todo.map((data) => {
            if (data.id.toString() === geteditId) {
              return { ...data, text: input };
            }
            return data;
          })
        );
        setEdit(false);
      } else {
        setTodo([
          ...todo,
          {
            text: input,
            id: Math.floor(Math.random() * 1000),
            completed: false,
          },
        ]);
      }
    }
    setInput("");
    ref.current.focus();
  };

  const inputAttrs = {
    onKeyPress: (event) => {
      if (event.charCode === 13) {
        addTodoHandler();
      }
    },
  };

  return (
    <>
      <div className="weather-list">
        <WeatherEngine intialSearch="" />
        <WeatherEngine intialSearch="94086" />
        <WeatherEngine intialSearch="Hyderabad" />
        <WeatherEngine intialSearch="Barrow" />
      </div>

      <div className="todo-app">
        <div className="text-field-dropdown">
          <TextField
            buttonLabel={!edit ? "Add Todo" : "Update"}
            input={input}
            clickHandler={addTodoHandler}
            setInput={setInput}
            ref={ref}
            inputAttrs={inputAttrs}
            loading={loading}
          />
          <DropDown setSelect={setSelect} select={select} />
        </div>
        {!edit ? (
          <TodoList
            todo={todo}
            input={input}
            setInput={setInput}
            filterList={filterList}
            setTodo={setTodo}
            edit={edit}
            setEdit={setEdit}
            inputRef={ref}
            setgeteditId={setgeteditId}
            geteditId={geteditId}
          />
        ) : (
          <Loading text="Editing" />
        )}
      </div>
      <GetRandomUser />
    </>
  );
}

export default App;
