import React, { useState, useEffect, useRef, use } from "react";
import WeatherEngine from "./weather/weatherEngine.jsx";
import TextField from "./components/textField/textField.js";
import TodoList from "./components/todos/todoList";
import DropDown from "./components/todos/dropDown";
import Loading from "./components/loading/loading";
import NavBar from "./components/navBar/navBar";
import GetRandomUser from "./components/getRamdonUser/getRandomUser";
import Spinner from "./components/spinner/spinner";
import Music from "./components/music/music";
import Login from "./components/login/login";
import Overlay from "./components/overlay/overlay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Addition from "./components/addition/addition";
import Main from "./components/randomSite/main";
import dataProvider from "./components/provider";
import SyncScroll from "./components/syncronousScroll/syncScroll";
//API's
/**
 * Dummy user data: https://reqres.in/api/users?page=2
 */

const  App = ()=> {
  //Local storage
  let localTodos = [];
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("localTodo"))) {
      localTodos = JSON.parse(localStorage.getItem("localTodo"));
      setTodo(localTodos);
      // ref.current.focus();
    }
  }, []);

  const ref = useRef(null);
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(localTodos);
  const [select, setSelect] = useState("All");
  const [filterList, setFilterList] = useState([]);
  const [loading, setloading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [geteditId, setgeteditId] = useState(null);

  useEffect(() => {
    window.localStorage.setItem("localTodo", JSON.stringify(todo));
  }, [todo]);

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

  const name = {
    first: "madhu",
    second: "reddy",
  };
  const syncScrol = (scroll) => {
    const face1 = document.getElementById("scroll1");
    const face2 = document.getElementById("scroll2");
    if (scroll == "scroll1") {
      face2.scrollTop = face1.scrollTop;
    } else {
      face1.scrollTop = face2.scrollTop;
    }
  };
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <div className="flex">Home</div>
          </Route>
          <Route path="/news">
            <div className="flex">News</div>
          </Route>
          <Route path="/spinner" component={Spinner} />
          <Route path="/music" component={Music} />
          <Route path="/overlay" component={Overlay} />
          <Route path="/weather">
            <div className="weather-list">
              <WeatherEngine intialSearch="" />
              <WeatherEngine intialSearch="94086" />
              <WeatherEngine intialSearch="Hyderabad" />
              <WeatherEngine intialSearch="Barrow" />
            </div>
          </Route>
          <Route path="/todoapp">
            <dataProvider.Provider value={name}>
              <div className="todo-app fade-in">
                <div className="text-field-dropdown">
                  <TextField
                    buttonLabel={!edit ? "Add Todo" : "Update"}
                    input={input}
                    clickHandler={addTodoHandler}
                    setInput={setInput}
                    ref={ref}
                    onBlur={() => null}
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
            </dataProvider.Provider>
          </Route>
          <Route path="/randomuser" component={GetRandomUser} />
          <Route path="/syncscroll" component={SyncScroll} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      {/* <Addition /> */}
      {/* <Main /> */}
      {/* <div>Hello</div> */}
    </>
  );
}

export default App;
