import React from 'react'
import "./SearchInput.css"

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search</span>
      </label>
      <div className='security-search'>
        <div className='search-Input'>
          <input
            type="text"
            id="header-search"
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Securities"
            name="s"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchInput