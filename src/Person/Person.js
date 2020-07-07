import React from "react";
import classes from "./Person.css";
// import Radium from "radium";

const person = (props) => {
  // const style = {
  //   "media (min-width: 500px)": {
  //     width: "450px",
  //   },
  // };

  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error("Something Went Wrong");
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and i'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// export default Radium(person);
export default person;
