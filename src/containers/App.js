import React, {Component} from 'react';
import Airport2 from './Airport2';
import Top from '../components/Top';
import './App.css';

class App extends Component{ 
  render () {
    return (
      <div>
        <Top/>
        <Airport2 />
      </div> 
      );
  }
}

export default App;
