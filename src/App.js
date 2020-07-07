import React, { Component /*createElement*/ } from "react";
import classes from "./App.css";
// import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Mayank", age: 20 },
      { id: "3", name: "Ajmeri", age: 20 },
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
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
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    // let classes = ["red", "bold"].join(" ");
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red','bold']
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I am a react App</h1>
        <p className={assignedClasses.join(" ")}>This is working</p>
        <button
          className={btnClass}
          // onClick={() => this.switchNameHandler("Maximillian")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;

// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Hi I'm a react app")
// );
