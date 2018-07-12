import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { getNextQuote } from '../actions/index';
import Quotes from '../components/Quotes';

class QuoteContainer extends Component {
  componentDidMount = () => {
    this.props.getNextQuote(this.props.nextQuoteIndex);
  }

  getNextQuote = (id) => {
    this.props.getNextQuote(this.props.nextQuoteIndex)
  }

  render() {
    return (
      <View>
        <Quotes quote={this.props.quote} getNextQuote={this.getNextQuote} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quotes.quote,
    nextQuoteIndex: state.quotes.quoteIndex + 1,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getNextQuote: (id) => {
    dispatch(getNextQuote(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteContainer);
