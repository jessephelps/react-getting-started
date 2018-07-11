import React, { PureComponent } from 'react';

class Quote extends PureComponent {
  render() {
    return (
      <div className="Quote">
        {this.props.text}
      </div>
    );
  }
}

export default Quote;
