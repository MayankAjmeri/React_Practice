import React, { Component } from "react";
import classes from "./Person.css";
// import Radium from "radium";

class Person extends Component {
  render() {
    // const person = (props) => {
    // const style = {
    //   "media (min-width: 500px)": {
    //     width: "450px",
    //   },
    // };
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and i'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

// export default Radium(person);
export default Person;
