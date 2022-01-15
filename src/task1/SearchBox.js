import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div align="center">
      <div className="searchBox">
        <div className="shadow" />
        <input type="text" placeholder="Search Something..." />
        <ion-icon name="search-outline" />
      </div>
    </div>
  );
}

export default SearchBox;
