import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainContainer from '../MainContainer/MainContainer.js';
import { createNewStore } from '../../mainStore.js';
import LogOut from '../LogOut/LogOut.js';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.theStore = createNewStore();
  }
  render() {
    return (
      <Provider store={this.theStore}>
        <div className="App">
            <div className="App-header">
              <div className="App-title">Star Wars Paradise</div>
              <LogOut />
            </div>
            <MainContainer />
        </div>
      </Provider >
    );
  }
}

export default App;