import React, { useState, useEffect } from "react";
import "./getRandomUser.scss";
import Loading from "../loading/loading";

const GetRandomUser = () => {
    const [user, setUser] = useState([]);
    const [results, setResults] = useState([]);

    const fetchNextUser = (page = 1) => {
        fetch(`https://randomuser.me/api?page=${page}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUser(data);
                const newResults = [...results, ...data.results];
                setResults(newResults);
            });
    };

    useEffect(() => {
        // const fetchNextUser = (page = 1) => {
        //   fetch(`https://randomuser.me/api?page=${page}`)
        //     .then((response) => {
        //       return response.json();
        //     })
        //     .then((data) => {
        //       setUser(data);
        //       const newResults = [...results, ...data.results];
        //       setResults(newResults);
        //     });
        // };
        fetchNextUser();
    }, []);

    const debounce = (fn, delay) => {
        let setTime;
        return function (...arg) {
            if (setTime) {
                clearTimeout(setTime);
            }
            setTime = setTimeout(() => {
                fn(...arg);
            }, delay);
        };
    };

    return user ? (
        <div className="user-data fade-in">
            {results.length !== 0 ? (
                results.map((user) => {
                    return (
                        <div
                            key={user.name.first}
                            className="user-info animation"
                        >
                            <div>Name: {user.name.first}</div>
                            <img src={user.picture.thumbnail} alt="" />
                        </div>
                    );
                })
            ) : (
                <Loading text="Loading" />
            )}

            <button
                onClick={debounce(() => {
                    fetchNextUser();
                }, 300)}
                className="data-button animation"
            >
                Get new user
            </button>
        </div>
    ) : (
        ""
    );
};

export default GetRandomUser;
