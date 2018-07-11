import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Quote.css';

class Quote extends Component {
  render() {
    return (
      <div className="Quote">
        {this.props.text}
      </div>
    );
  }
}

export default Quote;

Quote.propTypes = {
  text: PropTypes.string,
};
