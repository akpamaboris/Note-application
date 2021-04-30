const Note = ({ text, id, listOfNote, setListOfNote }) => {
  const deleteNote = (event) => {
    let newTab = [...listOfNote];
    let newArr = [];
    let x = id;
    for (let i = 0; i < newTab.length; i++) {
      if (i !== x) {
        newArr.push(newTab[i]);
      }
    }
    setListOfNote(newArr);
    // console.log(newTab);
  };

  return (
    <div onClick={deleteNote}>
      {text}
      {/* {id} */}
    </div>
  );
};

export default Note;
