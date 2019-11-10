import React from 'react';
import logo from '../img/lo.png'

export default function Logo() {
  return (<a href="/" title="home">
    <img className="logo" src={logo} alt="Blogger Logo" />
  </a>)
}