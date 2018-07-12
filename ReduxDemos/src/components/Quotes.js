import React, { PureComponent } from 'react';

const Quote = (props) => (
  <div className="Quote">
    {props.text}
  </div>
);

class Quotes extends PureComponent {
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
