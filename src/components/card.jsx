import React from "react";
import Button from "./Button";

export default function Card({ card, emojiBackgrounds, setEmojiBackgrounds }) {
  const { setup, punchline } = card;

  return (
    <div className="main-container">
      <div className="card-container">
        <h2 className="joke-setup">{setup}</h2>
        <h2 className="joke-punchline">{punchline}</h2>
        <Button card={card} emojiBackgrounds={emojiBackgrounds} setEmojiBackgrounds={setEmojiBackgrounds} />
      </div>
    </div>
  );
}
