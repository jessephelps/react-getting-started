import React, { Component } from 'react';
import Quote from './Quote';

class Quotes extends Component {
  constructor() {
    super();
    this.state = { quote: '', quoteIndex: 0 };
  }

  componentDidMount = () => {
    this.getNextQuote();
  }

  getNextQuote = async () => {
    let nextIndex = this.state.quoteIndex + 1;
    let newQuoteResponse = await fetch(`${nextIndex}.json`);
    if (newQuoteResponse.redirected) {
      nextIndex = 1;
      newQuoteResponse = await fetch(`${nextIndex}.json`);
    }
    const newQuoteResponseJson = await newQuoteResponse.json();
    this.setState({quote: newQuoteResponseJson.quote, quoteIndex: nextIndex});
  }

  render() {
    return (
      <div className="Quotes">
        <Quote text={this.state.quote} />
        <button onClick={this.getNextQuote}>Next</button>
      </div>
    );
  }
}

export default Quotes;
