import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";

export default function Jokester() {
  const apiUrl = "https://official-joke-api.appspot.com/random_ten";
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios(apiUrl)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <header>Jokester App</header>
        {result.map((card) => (
          <div className="main-container">
            <div className="card-container">
              <h2>{card.setup}</h2>
              <h2>{card.punchline}</h2>

              <div className="liking-feature">
                <div className="dislike eye-left eye-right frown"></div>
                <div className="like eye-left eye-right smile"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
