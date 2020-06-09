import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Airport.css';
import Basket from  './Basket.js';
import './Basket.css';
import {user, airports} from './fakedata.js';

function Airport () {
	const [startDate, setStartDate] = useState(new Date());
	
	const airportlist = airports.map((name, i)=> {
		return <Block name = {airports[i].name} />
	})

	return (
		<div className = "f3 tc">
			<header>
			<DatePicker selected = {startDate} onChange= {date => setStartDate(date)}/>
			<p> {startDate.toString()} </p>
			</header>
			{airportlist}
		</div> 
		)
}
export default Airport;

function Block (props) {
	const blocklist = user.filter(individual => {
		return individual.airport.toLowerCase() === props.name.toLowerCase()})

	const blockmap = blocklist.map((name, i) => {
		return <Basket id = {blocklist[i].id} name={blocklist[i].name} time = {blocklist[i].time} airport = {blocklist[i].airport}/>
	})
	
	return ( 
		<div className = "bg-light-yellow dib br4 pa1 ma3 grow">
			<header> {props.name} </header>
			{blockmap}
		</div>  
		)
}