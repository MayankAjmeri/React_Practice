import React, { Component /*createElement*/ } from "react";
import classes from "./App.css";
// import Radium, { StyleRoot } from "radium";
// import Person from "../components/Persons/Person/Person";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Mayank", age: 20 },
      { id: "3", name: "Ajmeri", age: 20 },
    ],
    otherState: "Some other value",
    showState: false,
    showCockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1,
      };
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
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    // let classes = ["red", "bold"].join(" ");

    return (
      // <StyleRoot>
      // <div className={classes.App}>
      // <WithClass classes={classes.App}>
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Aux>
      // </WithClass>
      // </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default withClass(App, classes.App);

// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Hi I'm a react app")
// );
