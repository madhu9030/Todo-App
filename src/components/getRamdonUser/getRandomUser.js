import React, { useState, useEffect } from "react";

const GetRandomUser = () => {
  const [user, setUser] = useState([]);
  const [results, setResults] = useState([]);

  const fetchNextData = (page = 1) => {
    fetch(`https://randomuser.me/api?page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
        const newResults = [...results, ...data.results];
        setResults(newResults);
      });

    // fetch("https://worldwide-restaurants.p.rapidapi.com/detail", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "x-rapidapi-key": "6e8c986419mshb869ae0a7920fd2p120061jsn508421ba8f21",
    //     "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
    //   },
    //   body: {
    //     currency: "USD",
    //     language: "en_US",
    //     location_id: "15333482",
    //   },
    // })
    //   .then((response) => {
    //     return response;
    //   })
    //   .then((data) => {
    //     console.log(data.json());
    //   });
  };

  useEffect(() => {
    fetchNextData();
    // console.log("hello");
  }, []);

  return user ? (
    <div className="user-data">
      {results.length !== 0 ? (
        results.map((user) => {
          return (
            <div className="user-info">
              <div>Name: {user.name.first}</div>
              <img src={user.picture.thumbnail} alt="" />
            </div>
          );
        })
      ) : (
        <i className="spinner load"></i>
      )}

      <button
        onClick={() => fetchNextData(user.info.page + 1)}
        className="data-button"
      >
        Get new user
      </button>
    </div>
  ) : (
    ""
  );
};

export default GetRandomUser;
