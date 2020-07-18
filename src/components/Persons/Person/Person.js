import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
// import Radium from "radium";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

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
      <Aux>
        {/* <div className={classes.Person}> */}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and i'm {this.props.age}
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

// export default Radium(person);
export default withClass(Person, classes.Person);
