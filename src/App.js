import { useState } from "react";
import "./App.css";
import InputElement from "./InputElement";

function App() {
  const [note, setNote] = useState("");
  const [listOfNote, setListOfNote] = useState([]);
  return (
    <div>
      <h1>Todo List</h1>
      <InputElement
        note={note}
        setNote={setNote}
        listOfNote={listOfNote}
        setListOfNote={setListOfNote}
      />
    </div>
  );
}

export default App;
