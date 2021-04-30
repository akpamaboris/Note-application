import Note from "./Note.js";

const InputElement = ({ note, setNote, listOfNote, setListOfNote }) => {
  const addToNotes = (event) => {
    let newTab = [...listOfNote];
    newTab.push(note);
    setListOfNote(newTab);
  };
  return (
    <div className="input-class">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input type="text" onChange={(event) => setNote(event.target.value)} />
        <input type="submit" className="input-button" onClick={addToNotes} />
      </form>
      {/* {note} */}
      {listOfNote.map((x, index) => {
        return (
          <div className="note-note">
            <Note
              text={x}
              id={index}
              listOfNote={listOfNote}
              setListOfNote={setListOfNote}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputElement;
