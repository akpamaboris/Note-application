import { useState } from "react";

const SearchBar = ({ note, setNote, listOfNote, setListOfNote }) => {
  const [search, setSearch] = useState("");

  const searchResult = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const displaySearchResult = (x, index) => {
    if (x.toLowerCase().includes(search.toLowerCase())) {
      return (
        <div className="res-search" key={index}>
          {x} <br />
        </div>
      );
    }
  };

  return (
    <div>
      <h1>SearchBar {search}</h1>
      <input type="text" onChange={searchResult} />
      <span>
        {listOfNote.map((x, index) => {
          return search.length > 0 ? displaySearchResult(x, index) : null;
        })}
      </span>
    </div>
  );
};

export default SearchBar;
