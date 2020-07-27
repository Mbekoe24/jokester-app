import React from "react";
import Like from "../images/smile.png";
import Dislike from "../images/frown.png";

export default function Button({
  card,
  emojiBackgrounds,
  setEmojiBackgrounds,
}) {
  const handleLike = (id) => {
    if (emojiBackgrounds[id]) {
      const newEmojis = { ...emojiBackgrounds };
      delete newEmojis[id];
      setEmojiBackgrounds(newEmojis);
      localStorage.setItem("emojis", JSON.stringify(newEmojis));
    } else {
      const newEmojis = {
        ...emojiBackgrounds,
        [id]: "liked",
      };
      setEmojiBackgrounds(newEmojis);
      localStorage.setItem("emojis", JSON.stringify(newEmojis));
    }
  };

  const handleDislike = (id) => {
    if (emojiBackgrounds[id]) {
      const newEmojis = { ...emojiBackgrounds };
      delete newEmojis[id];
      setEmojiBackgrounds(newEmojis);
      localStorage.setItem("emojis", JSON.stringify(newEmojis));
    } else {
      const newEmojis = {
        ...emojiBackgrounds,
        [id]: "disliked",
      };
      setEmojiBackgrounds(newEmojis);
      localStorage.setItem("emojis", JSON.stringify(newEmojis));
    }
  };

  return (
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
        <img className="frown" src={Dislike} alt="dislike" />
        
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
  );
}
