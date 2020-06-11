import React, {Component} from 'react';
import Airport2 from './Airport2';
import Top from '../components/Top';
import Signin from '../components/Signin';
import './Airport2.css';
import Help from '../components/Help'
import Thank from '../components/Thank'

class App extends Component{ 
  constructor (){
  	super()
  	this.state = {
  		route: 'firsttime'
  	};
  };

 	onRouteChange = (route) => {
		this.setState({route:route});
	}

  render () {
    return (
      <div>
      {this.state.route === 'firsttime'
      ? <div>
        <Top/>
		<h5 className = 'tr link dim black underline pa3 pointer'> <Help/> </h5>
		<h5 className = 'tr link dim black underline pa3 pointer'> Login </h5>
        <Airport2 />
        <Signin onRouteChange = {this.onRouteChange} /> 
        </div>
      :(this.state.route === 'Thank'
      	? <div>
          <Thank onRouteChange = {this.onRouteChange}/> 
          </div>
        : <div>
          <Top/>
          <Airport2/>
          </div>
  	  )}
      </div> 
      );
  }
}

export default App;
