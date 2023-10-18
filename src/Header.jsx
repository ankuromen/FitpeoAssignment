import React from 'react'
import { BsSearch, BsJustify }
  from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <span>Hello Shahrukh,</span>
        
        
      </div>
      <div className='header-right'>
      <BsSearch className='icon' />&nbsp;
      <input type='search' placeholder='Search'/>
      </div>

    </header>
  )
}

export default Header