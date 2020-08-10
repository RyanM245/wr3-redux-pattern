import React from 'react';
import Child1 from './components/Child1';
import './App.css';
import e from 'express';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage = () =>{

  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render(){
    return <div className="app-main">
      <input value={this.state.message} onChange={e => this.changeHandler(e)}/>
      <button onClick={this.addMessage}>Add Comment</button>
      <Child1/>
    </div>
  }
}

export default App;
