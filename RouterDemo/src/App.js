import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Quotes from './Demo/Quotes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
          <Route path="/:id" component={Quotes} />
        </div>
      </Router>
    );
  }
}

export default App;
