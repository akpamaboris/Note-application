import { useState } from "react";
import "./App.css";
import InputElement from "./InputElement";
import SearchBar from "./SearchBar.js";

function App() {
  const [note, setNote] = useState("");
  const [listOfNote, setListOfNote] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "lig" : "log"}>
      <div className="container">
        <div className="row-1">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              console.log(darkMode);
            }}
          >
            Toggle DarkModes
          </button>
          <br />
          <h1>Todo List</h1>
          <InputElement
            note={note}
            setNote={setNote}
            listOfNote={listOfNote}
            setListOfNote={setListOfNote}
          />
        </div>
        <div className="row-2">
          <SearchBar
            note={note}
            setNote={setNote}
            listOfNote={listOfNote}
            setListOfNote={setListOfNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
