import React from 'react';

export default function Banner() {
  return (
    <section className="banner">
      <div>
        <h1>Nahdhat Shaba Girls Blog</h1>
        <p>All Great Things In One Place. Aden Got Talints</p>
        <div className="search-field">
          <img src={require('../img/search-icon.png')} alt="search icon" />
          <input placeholder="Whate Are You Lookin For?" type="search" />
        </div>
      </div>
    </section>
  )
}