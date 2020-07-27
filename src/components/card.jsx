import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";
export default function card() {
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
    // console.log("im like");
    // console.log(likeBackground, "bkng");
    // console.log(setLikeBackground, "setlikebkng");
  }
  function handleDislike() {
    if (dislikeBackground) {
      setDislikeBackground((dislikeBackground = false));
    } else {
      setDislikeBackground((dislikeBackground = true));
    }
    // console.log("im dislike");
    // console.log(dislikeBackground, "bkng");
    // console.log(setDislikeBackground, "setdslbkng");
  }
  //   setData()  {
  // localStorage.setItem()
  //   }

  return (
    <>
      <div>
        <header>Hello Guys</header>
      </div>
    </>
  );
}
