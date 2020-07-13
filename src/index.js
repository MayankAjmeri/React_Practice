import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App appTitle="Person Manager" />,
  document.getElementById("root")
);
registerServiceWorker();

// ReactDOM.render(<h1>Test</h1>, document.getElementById('root'));
// registerServiceWorker();
