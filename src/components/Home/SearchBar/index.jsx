import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    {/* <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button className='btn-go'>Go</button>
    </form> */}
     <div className="about">
      <button><Link className='blogItem-link' to={'/about'}>About me</Link></button>
    </div>
  </div>
);

export default SearchBar;
