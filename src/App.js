import React from "react";
import "./styles/app.scss";
//Adding components
import Player from "./Components/Player";
import Song from "./Components/Song";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
