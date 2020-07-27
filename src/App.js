import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";
import myJoke from "./components/Personal";
import Footer from "../src/components/Footer";
function App() {
  const apiUrl = "https://official-joke-api.appspot.com/random_ten"; // send to app.js

  const [result, setResult] = useState([]); // in here
  const [emojiBackgrounds, setEmojiBackgrounds] = useState({}); //in here

  useEffect(() => {
    getJokes();
    setEmojis();
  }, []);

  const setEmojis = () => {
    const emojis = localStorage.getItem("emojis");
    if (emojis) {
      setEmojiBackgrounds(JSON.parse(emojis));
    }
  };

  const getJokes = async () => {
    try {
      const res = await axios(apiUrl);
      res.data.push(myJoke);
      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      {result.map((card) => (
        <Card
          key={card.id}
          card={card}
          emojiBackgrounds={emojiBackgrounds}
          setEmojiBackgrounds={setEmojiBackgrounds}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
