import React, { Component } from 'react';
import './App.css';

import Quotes from './components/Quotes';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Quotes />
      </div>
    );
  }
}

export default App;
