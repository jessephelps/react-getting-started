import React, { Component } from 'react';

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
