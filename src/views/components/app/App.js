import React from "react";
import './App.css'
import ComicCardList from "../comicCardList/comicCardList";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Marvel</h2>
        <ComicCardList></ComicCardList>
      </div>
    </div>
  );
}

export default App;
