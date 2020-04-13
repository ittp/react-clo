import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Coffee Like'
    };
  }

  render() {
    return (
      <header class='header'>
      <div class="logo">logo</div>
      <Hello name={this.state.name} />
      </header>
 
        
    
    );
  }
}

render(<App />, document.getElementById('root'));
