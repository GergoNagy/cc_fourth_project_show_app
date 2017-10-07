import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import LoginForm from './components/LoginForm.js'
import RegisterForm from './components/RegisterForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <LoginForm />
        </section>
      </div>
    );
  }
}

export default App;
