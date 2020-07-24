import axios from "axios";
// axios CALL
import "./card.css";

/// STYLING

import React, { Component } from "react";
// COMPONENTS

class Jokes extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  // API CALL
  componentDidMount = async () => {
    const response = await axios(
      "https://official-joke-api.appspot.com/random_ten"
    );
    console.log(response.data);
    this.setState({
      result: response.data,
    });
  };

  render() {
    // const { result } = this.state;

    return (
      <div>
        {/* {this.state.result.map((post)) => (  
          ))} */}

        <div className="card-container">
          {/* <h2>{post.setup}</h2>
          <h2>{post.punchline}</h2> */}
          <h2>card goes here</h2>
          <div>
            <div className="dislike eye-left eye-right frown"></div>
            <div className="like eye-left eye-right smile"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jokes;
