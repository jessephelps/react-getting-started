import React, { Component } from 'react';
import Quote from './Quote';

class Quotes extends Component {
  render() {
    return (
      <div className="Quotes">
        <Quote text={'I know you think you understand what you thought I said but I\'m not sure you realize that what you heard is not what I meant - Alan Greespan'} />
        <Quote text={'I guess I should warn you, if I turn out to be particularly clear, you\'ve probably misunderstood what I\'ve said - Alan Greenspan'} />
        <Quote text={'It\'s okay if you disagree with me. I can\'t force you to be right.'} />
      </div>
    );
  }
}

export default Quotes;
