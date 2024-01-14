import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fitriawan Arya Nugraha</h1>
        </header>
        <div className="App-body">
          <p className="App-intro">
            Welcome to my web profile. To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <section className="App-connect">
            <h2>Let's Connect</h2>
            <p>
              You can connect with me on the following platforms:
            </p>
            <ul>
              <li><a href="https://www.linkedin.com/in/fitriawanaryanugraha/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/fitriawanaryanugraha" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              {/* Add more links as needed */}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
