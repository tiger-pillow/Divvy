import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Airport.css';
import Basket from  '../components/Basket.js';
import '../components/Basket.css';
import {users, airports} from '../components/fakedata.js';
import Scroll from '../components/Scroll';

function Airport () {
	const [startDate, setStartDate] = useState(new Date());
	
	const airportlist = airports.map((name, i)=> {
		return <Block name = {airports[i].name} date = {startDate}/>
	})

	return (
		<div className = "f3 tc">
			<header>
				<DatePicker selected = {startDate} onChange= {date => setStartDate(date)}/>
			</header>
			<Scroll>{airportlist}</Scroll>
		</div> 
		)
}
export default Airport;

function Block (props) {
	const blocklist = users.filter(user => {
		return (Number(user.month) === (props.date.getMonth()+1) && user.airport.toLowerCase() === props.name.toLowerCase())
		})

	const blockmap = blocklist.map((name, i) => {
		return <Basket id = {blocklist[i].id} name={blocklist[i].name} time = {blocklist[i].time} airport = {blocklist[i].airport}/>
	})
	
	return ( 
		<div className = "bg-light-yellow dib br4 pa1 ma3 grow">
			<header> {props.name} {props.date.getMonth()+1} </header>
			{blockmap}
		</div>  
		)
}