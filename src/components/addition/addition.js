import React, { useReducer, useState, useRef } from "react";
import reducer from "./reducer";
import PasswordValidation from "../validations/passwordValidation";

const Addition = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([""]);
    const inputRef = useRef(null);
    console.log(errors);
    return (
        <div>
            <div>{state.count}</div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({ type: "add", payload: input });
                    setInput("");
                }}
            >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    ref={inputRef}
                />
            </form>

            {state &&
                state.map((todo) => [
                    <span
                        onClick={() =>
                            dispatch({ type: "remove", id: todo.id })
                        }
                        id={todo.id}
                        key={todo.id}
                        style={{
                            textDecoration: `${
                                Boolean(todo.done) ? "line-through" : "none"
                            }`,
                        }}
                    >
                        {todo.text}
                    </span>,
                    <button
                        key={`done${todo.id}`}
                        onClick={() => dispatch({ type: "done", id: todo.id })}
                    >
                        {`${Boolean(todo.done) ? "Completed" : "Complete"}`}
                    </button>,
                ])}
            <div>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) =>
                        PasswordValidation(
                            e,
                            setPassword,
                            password,
                            setErrors,
                            errors
                        )
                    }
                />
                <ul>
                    {errors &&
                        errors.map((error) => (
                            <li style={{ color: "red" }}>{error}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Addition;
