import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request
    const timer = setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleaning work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleaning work in 2nd useEffect");
    };
  });

  // useEffect

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //classes = ['red','bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is working</p>
      <button
        className={btnClass}
        // onClick={() => this.switchNameHandler("Maximillian")}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
