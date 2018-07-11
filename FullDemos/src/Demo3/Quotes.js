import React, { Component } from 'react';
import Quote from './Quote';
// import Quote from './PureQuote';
// import Quote from './StatelessQuote';

const quoteList = [
  'Not everything that can be counted counts, and not everything that counts can be counted.',
  'A person who never made a mistake never tried anything new.',
  'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
];

class Quotes extends Component {
  constructor() {
    super();
    this.state = { quoteIndex: 0 };
  }

  getNextQuoteIndex = (index) => {
    return index + 1;
  }

  goToNextQuote = () => {
    this.setState({ quoteIndex: this.getNextQuoteIndex(this.state.quoteIndex) });
  }

  getQuoteText = () => {
    return quoteList[this.state.quoteIndex];
  }

  render() {
    return (
      <div className="Quotes">
        <Quote text={this.getQuoteText()} />
        <button onClick={this.goToNextQuote}>Next</button>
      </div>
    );
  }
}

export default Quotes;
