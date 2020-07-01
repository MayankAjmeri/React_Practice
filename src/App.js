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
        { id: "1", name: newName, age: 28 },
        { id: "2", name: "Mayank", age: 20 },
        { id: "3", name: "Ajmeri", age: 20 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: [
        { name: "Max!!", age: 28 },
        { name: "Mayank", age: 20 },
        { name: event.target.value, age: 20 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

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
        {persons}
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
