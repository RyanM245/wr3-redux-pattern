import React from 'react';
import Child1 from './components/Child1';
import './App.css';

class App extends React.Component {
  render(){
    return <div className="app-main">
      <Child1/>
    </div>
  }
}

export default App;
