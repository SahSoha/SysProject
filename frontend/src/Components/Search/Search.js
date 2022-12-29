import React from 'react';
import './Search.css';
function Search() {
  return (
    <div class="S-container">
      <form>
        <input type="search" placeholder="Search..."></input>
        <button type="submit">Search </button>
      </form>
    </div>
  );
}
export default Search;
