import React from 'react';

function Thank ({onRouteChange}) {
	return (
		<div className = 'tc'>
			<h1> Thank you for using Divvy! </h1> 
			<div>
				<input 
				className = 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
				value = 'click to modify'
				onClick = {() => {onRouteChange('modify')}} />
			</div> <br></br> 
			<div>
				<input 
				className = 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
				value = 'Fill out another form'
				onClick = {()=>{onRouteChange ('firsttime')}} />
			</div>
		</div>)
}

export default Thank 