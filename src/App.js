import React, { Component, createElement } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is working</p>
        <Person name="Max" age="29" />
        <Person name="Mayank" age="20">
          My hobbies: Gaming
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi I'm a react app")
    // );
  }
}

export default App;
