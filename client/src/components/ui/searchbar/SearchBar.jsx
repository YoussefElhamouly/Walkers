'use client';
import { useState } from 'react';
import styles from './searchBar.module.scss';
const SearchBar = ({ callback, customStyles = '' }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (callback) callback(e.target.value);
  };
  return (
    <div className={`${styles.search} ${customStyles}`}>
      <div className="iconWrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path d="M22.853,22.131l-4.958-4.941c1.363-1.573,2.075-3.811,2.129-6.707-.105-6.067-3.482-9.43-9.515-9.469C4.398,1.053,1,4.553,1,10.483c0,6.049,3.313,9.45,9.515,9.487,2.871-.017,5.098-.711,6.674-2.074l4.959,4.943c.306,.275,.609,.097,.707,0,.194-.196,.194-.512-.002-.707Zm-12.338-3.161c-5.622-.033-8.407-2.807-8.515-8.478,.104-5.669,2.89-8.442,8.509-8.478,5.553,.036,8.418,2.891,8.515,8.468-.104,5.678-2.89,8.454-8.509,8.487Z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="What do you search about?"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
