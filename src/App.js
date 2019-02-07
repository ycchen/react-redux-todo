import React, { Component } from 'react';
import './App.css';
import CreateTodo from './containers/CreateTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{marginTop: "80px"}}>
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
