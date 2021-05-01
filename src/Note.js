import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope, faKey, faTrash);

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
      <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
      <label for="cbox2">{text} </label>
      {/* {id} */}
      <FontAwesomeIcon
        className="icon-font"
        icon="trash"
        onClick={deleteNote}
      />
    </div>
  );
};

export default Note;
