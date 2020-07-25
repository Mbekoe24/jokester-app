import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";
import Like from "../images/smile.png";
import Smiley from "../images/smile@3x.png";
import Dislike from "../images/frown.png";

export default function Jokester() {
  const apiUrl = "https://official-joke-api.appspot.com/random_ten";

  const [result, setResult] = useState([]);
  let [likeBackground, setLikeBackground] = useState(true);
  let [dislikeBackground, setDislikeBackground] = useState(true);
  const [selected, setSelected] = useState(null);

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

  // function handleClick(e) {
  //   e.preventDefault();
  //   // let background = "#7de4a6";
  //   // setBackground(background);
  //   // console.log(background, "background");
  //   console.log("The link was clicked.");
  // }
  //  const [selected, setSelected] = useState(null);

  function handleLike() {
    if (likeBackground) {
      setLikeBackground((likeBackground = false));
    } else {
      setLikeBackground((likeBackground = true));
    }
    console.log("im like");
    console.log(likeBackground, "bkng");
    console.log(setLikeBackground, "setlikebkng");
  }
  function handleDislike() {
    if (dislikeBackground) {
      setDislikeBackground((dislikeBackground = false));
    } else {
      setDislikeBackground((dislikeBackground = true));
    }
    console.log("im dislike");
    console.log(dislikeBackground, "bkng");
    console.log(setDislikeBackground, "setdslbkng");
  }
  //   setData()  {
  // localStorage.setItem()
  //   }

  return (
    <>
      <header>
        <img src={Smiley} className="big-smile" alt="Smiley Face" />
      </header>
      {result.map((card, idx) => (
        <div className="main-container">
          <div key={idx} className="card-container">
            <h2 className="joke-setup">{card.setup}</h2>
            <h2 className="joke-punchline">{card.punchline}</h2>
            <div className="button-feature">
              <div
                className="button-bkg"
                style={{
                  backgroundColor: dislikeBackground
                    ? "rgba(0, 0, 0, 0.1)"
                    : "#fa8775",
                }}
                onClick={handleDislike}
              >
                <img className="frown " src={Dislike} alt="dislike" />
              </div>

              <div
                className="button-bkg"
                style={{
                  backgroundColor: likeBackground
                    ? "rgba(0, 0, 0, 0.1)"
                    : "#7de4a6",
                }}
                onClick={handleLike}
              >
                <img src={Like} className="smile" alt="like" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
