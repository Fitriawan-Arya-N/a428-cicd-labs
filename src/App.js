import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello I am Fitriawan Arya Nugraha</h1>
        </header>
        <div className="App-body">
          <section className="App-connect">
            <h2>Welcome to my web. Let's Connect!</h2>
            <p>
              Reach me on the following platforms:
            </p>
            <ul>
              <li>
                <a href="https://id.linkedin.com/in/fitriawan-arya-nugraha-a2b172220" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" alt="LinkedIn Logo" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Fitriawan-Arya-N" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub Logo" />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
