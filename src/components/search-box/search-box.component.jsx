import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder }) => (
    <input className='search' type='search'
        placeholder='search monsters'
        // onchange={handleChange}
    />
);