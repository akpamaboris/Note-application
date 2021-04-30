import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope, faKey);

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
    <div className="Notes">
      {text}
      {/* {id} */}
      <FontAwesomeIcon
        className="icon-font"
        icon="envelope"
        onClick={deleteNote}
      />
    </div>
  );
};

export default Note;
