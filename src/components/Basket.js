import React from 'react';
import './Basket.css'

function Basket (props) {
	return (
		<div className = 'basket grow fl w-20'>
			<div>
				{props.name} 
			</div>

		</div>
		)
}
export default Basket;