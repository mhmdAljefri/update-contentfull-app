import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>Title</h3>
        <img src={"http://placeimg.com/200/320/any"} alt="Item" />
      </div>
    )
  }
}