import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Sams Lemonade Stand</h2>
          </div>
          <p className="App-intro">
            {this.props.test}
            <button onClick={this.props.testdispatch}>
              Haldo
            </button>
          </p>
        </div>
    );
  }
}

export default App;
