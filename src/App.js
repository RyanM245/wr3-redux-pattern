import React from 'react';
import Child1 from './components/Child1';
import {connect} from 'react-redux';
import {addMessage} from './redux/reducer';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.pushButton = this.pushButton.bind(this);
  }

  pushButton = () =>{
    this.props.addMessage(this.state.message);
    this.setState({
      message: ''
    })
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render(){
    console.log(this.props)
    return <div className="app-main">
      <input value={this.state.message} onChange={e => this.changeHandler(e)}/>
      <button onClick={this.pushButton}>Add Comment</button>
      <span>{this.props.greeting}</span>
      <Child1/>
    </div>
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = {addMessage}

export default connect(mapStateToProps, mapDispatchToProps)(App);
