import React, { Component /*createElement*/ } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Mayank", age: 20 },
      { name: "Ajmeri", age: 20 },
    ],
    otherState: "Some other value",
    showState: false,
  };

  switchNameHandler = (newName) => {
    // console.log("Was Clicked");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Mayank", age: 20 },
        { name: "Ajmeri", age: 20 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max!!", age: 28 },
        { name: "Mayank", age: 20 },
        { name: event.target.value, age: 20 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is working</p>
        <button
          className="btn"
          // onClick={() => this.switchNameHandler("Maximillian")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
            >
              My hobbies: Gaming
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              changed={this.nameChangeHandler}
            ></Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Hi I'm a react app")
// );
