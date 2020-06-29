import React, { Component, createElement } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28,
      },
      {
        name: "Mayank",
        age: 20,
      },
      {
        name: "Ajmeri",
        age: 19,
      },
    ],
    otherState: "Some other value",
  };

  switchNameHandler = () => {
    // console.log("Was Clicked");
    this.setState({
      persons: [
        {
          name: "Maximillian",
          age: 28,
        },
        {
          name: "Mayank",
          age: 20,
        },
        {
          name: "Ajmeri",
          age: 20,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
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
