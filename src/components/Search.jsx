import React, { useRef } from "react";

const Search = (props) => {
  const inputRef = useRef();
  console.log(inputRef)

  return (
    <div>
      <h3>Search</h3>
      <form>
        <input ref={inputRef} required type="search" placeholder="Search" />
        <button type="submit" onClick={() => {
            inputRef.current.focus();
        }}> Submit </button>
      </form>
    </div>
  );
};

export default Search;
