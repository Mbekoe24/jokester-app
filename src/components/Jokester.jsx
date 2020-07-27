import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";
import Like from "../images/smile.png";
import Smiley from "../images/smile@3x.png";
import Dislike from "../images/frown.png";
import * as data from "./jokes.json";

export default function Jokester() {
  const apiUrl = "https://official-joke-api.appspot.com/random_ten";

  const [result, setResult] = useState([]);
  let [emojiBackgrounds, setEmojiBackgrounds] = useState({});

  useEffect(() => {
    // axios(apiUrl)
    //   .then((res) => {
    //     setResult(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setResult(data);
    debugger;
    const emojis = localStorage.getItem("emojis");
    if (emojis) {
      setEmojiBackgrounds(emojis);
    }
  }, []);

  function handleLike(id) {
    if (emojiBackgrounds[id]) {
      const newEmojis = { ...emojiBackgrounds };
      delete newEmojis[id];
      setEmojiBackgrounds(newEmojis);
    } else {
      setEmojiBackgrounds({
        ...emojiBackgrounds,
        [id]: "liked",
      });
    }
    localStorage.setItem("emojis", emojiBackgrounds);
  }
  function handleDislike(id) {
    if (emojiBackgrounds[id]) {
      const newEmojis = { ...emojiBackgrounds };
      delete newEmojis[id];
      setEmojiBackgrounds(newEmojis);
    } else {
      setEmojiBackgrounds({
        ...emojiBackgrounds,
        [id]: "disliked",
      });
    }
    localStorage.setItem("emojis", emojiBackgrounds);
  }
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
                  backgroundColor:
                    emojiBackgrounds[card.id] === "disliked"
                      ? "#fa8775"
                      : "rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => handleDislike(card.id)}
              >
                <img className="frown " src={Dislike} alt="dislike" />
                {/* DISLIKED */}
              </div>

              <div
                // liked
                className="button-bkg"
                style={{
                  backgroundColor:
                    emojiBackgrounds[card.id] === "liked"
                      ? "#7de4a6"
                      : "rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => handleLike(card.id)}
              >
                <img src={Like} className="smile" alt="like" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <footer></footer>
    </>
  );
}
