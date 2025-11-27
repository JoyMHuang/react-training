import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav className='navigation-menu'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/details'>Details</Link></li>
        <li><Link to='/calculator'>Calculator</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;