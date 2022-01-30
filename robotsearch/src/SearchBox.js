import React from 'react';
import './index.css';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue sBox" 
            type="search" 
            placeholder="search robots"
            onChange={searchChange} />
        </div>
        
    );
}
export default SearchBox;