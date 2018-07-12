import React, { Component } from 'react';
import Quote from './Quote';

class Quotes extends Component {
  constructor() {
    super();
    this.state = { quote: '' };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.getQuote(id);
  }

  getQuote = async (id) => {
    const newQuoteResponse = await fetch(`${id}.json`);
    const newQuoteResponseJson = await newQuoteResponse.json();
    this.setState({quote: newQuoteResponseJson.quote});
  }

  render() {
    return (
      <div className="Quotes">
        <Quote text={this.state.quote} />
      </div>
    );
  }
}

export default Quotes;
