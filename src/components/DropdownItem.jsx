import React from 'react';

const DropdownItem = ({ itemsArr, onSelectedItem, selected }) => {
  return (
    <ul className='dropdown'>
      {itemsArr.map((item, index) => (
        <li key={index} onClick={() => onSelectedItem(item)} className={selected === item ? 'active' : ''}>{item}</li>
      ))}
    </ul>
  );
};

export default DropdownItem;

