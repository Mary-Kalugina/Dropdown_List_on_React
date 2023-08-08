import React, { useState } from 'react';
import DropdownItem from "./DropdownItem";

const items = [
  "Profile Information", "Change password", "Become PRO", "Help", "Log Out"
]

const DropdownList = ({ state }) => {

  const [ selesctedItem, changeItem ] = useState();

  const onSelectedItem = (item) => {
    changeItem(item)
  }

  return (
    <div className={state ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
    <DropdownItem itemsArr={items} onSelectedItem={onSelectedItem} selected={selesctedItem}/>
    </div>
  );
}

export default DropdownList;
