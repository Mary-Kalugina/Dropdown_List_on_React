import React, { useState } from 'react';
import DropdownList from './DropdownList';

const Dropdown = () => {

const [ dropdownState, onStateChange ] = useState(false);

const changeState = () => {
    onStateChange(dropdownState ? false : true);
}

  return (
    <div className='container'>
        <button className='btn' onClick={changeState}>Acccount settings</button>
        <DropdownList state={ dropdownState } />
    </div>
  );
}

export default Dropdown;