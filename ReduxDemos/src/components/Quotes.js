import React, { Component } from 'react';
import Quote from '../components/Quote';

class Quotes extends Component {
  componentDidMount = () => {
    this.getNextQuote();
  }

  render() {
    return (
      <div className="Quotes">
        <Quote text={this.props.quote} />
        <button onClick={this.props.getNextQuote}>Next</button>
      </div>
    );
  }
}

export default Quotes;
