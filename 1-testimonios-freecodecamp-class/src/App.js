import React from "react";
import { DATA_INFO } from "./Data";
import "./App.css";
import Testimony from "./components/Testimony";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="principal-container">
          <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimony {...DATA_INFO[0]} />
          <Testimony {...DATA_INFO[1]} />
          <Testimony {...DATA_INFO[2]} />
        </div>
      </div>
    );
  }
}

export default App;
