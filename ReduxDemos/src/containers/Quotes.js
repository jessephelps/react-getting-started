import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNextQuote } from '../actions/index';
import Quote from '../components/Quote';

class Quotes extends Component {
  componentDidMount = () => {
    this.props.getNextQuote();
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

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
  };
};

const mapDispatchToProps = dispatch => ({
  getNextQuote: () => {
    dispatch(getNextQuote());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
