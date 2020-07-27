import React from "react";
import Button from "./Button";
export default function card(props) {
  const { card } = props;

  return (
    <div className="main-container">
      <div className="card-container">
        <h2 className="joke-setup">{card.setup}</h2>
        <h2 className="joke-punchline">{card.punchline}</h2>
        <Button {...props} />
      </div>
    </div>
  );
}
