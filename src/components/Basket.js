import React from 'react';
import './Basket.css'

function Basket (props) {
	return (
		<div className = 'tc bg-light-blue fl w-20 br3 pa3 ma2 grow'>
			<img alt = '' src = '' />
			<div>
				<h3> {props.airport} <br></br> {props.time} </h3>
				<p> {props.name }</p>
			</div>

		</div>

		)
}
export default Basket;