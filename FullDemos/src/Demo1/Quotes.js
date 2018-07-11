import React, { Component } from 'react';
import Quote1 from './Quote1';
import Quote2 from './Quote2';
import Quote3 from './Quote3';
import './Quotes.css';

class Quotes extends Component {
  render() {
    return (
      <div className="Quotes">
        <Quote1 />
        <Quote2 />
        <Quote3 />
      </div>
    );
  }
}

export default Quotes;
