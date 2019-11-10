import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <div>
        <Logo />
        <nav>
          <div className="d-flex ai-center" role="button">
            <img className="menu" src={require('../img/menu.png')} alt="menu icon" />
            Categories
        </div>
        </nav>
      </div>
      <nav>
        <span role="button">Contact</span>
        <span role="button">help</span>
      </nav>
    </header>
  )
}