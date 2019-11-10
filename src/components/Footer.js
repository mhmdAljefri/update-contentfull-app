import React from 'react';
import Logo from './Logo';

const navItems = ['Help', 'Status', 'Blog', 'Writers', 'Carrers', 'Events']

export default function Footer() {
  return (
    <footer>
      <div className="d-flex ai-center jc-space-between m-b-1">
        <div className="d-flex ai-center">
          <Logo />
          <p className="m-1">Nahdhat Shaba Girls Blog</p>
        </div>
        <nav className="d-flex ai-center">
          {navItems.map(function (item) {
            return (
              <p className="m-1">{item}</p>
            )
          })}
        </nav>
      </div>
      <div className="d-flex ai-center jc-center">
        <p className="m-1">Facebook</p>
        <p className="m-1">Twitter</p>
        <p className="m-1">Github</p>
      </div>
    </footer>
  )
}