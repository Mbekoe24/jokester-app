import React from "react";
import Smiley from "../images/smile@3x.png";

export default function header() {
  return (
    <header>
      <img src={Smiley} className="big-smile" alt="Smiley Face" />
    </header>
  );
}
