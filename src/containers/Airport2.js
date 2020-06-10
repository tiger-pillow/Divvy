import React, {Component, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Airport.css';
import Basket from  '../components/Basket.js';
import '../components/Basket.css';
import {users, airports} from '../components/fakedata.js';
import Scroll from '../components/Scroll';
import './Airport2.css'

class Airport2 extends Component {
	constructor (props){
		super(props);
		this.state = {
			startDate: new Date(),
			airports: airports,
			users: users
		}; 
	}

	onChange = date => {this.setState({startDate: date});}

	render () {
		return (
			<div className = "f3 tc">
			<header> 
				<DatePicker selected = {this.state.startDate} onChange = {this.onChange} />
			</header>
			<Scroll> 
				<Blocks date = {this.state.startDate} airports = {this.state.airports} users = {this.state.users}/>
			</Scroll>
			</div>
		);
	}
}
export default Airport2;


function Blocks({date, airports, users}){
	const Airmaps = airports.map((name, i) => {
		return <Block date = {date} airport = {airports[i].name} users = {users} />
	})

	return (
		<div >
		{Airmaps}
		</div>
		);
}

function Block ({date, airport, users}){
	const Userlist = users.filter(user => {
		return (Number(user.month) === (date.getMonth()+1) && user.airport.toLowerCase() === airport.toLowerCase())
	});

	const Basketmap = Userlist.map((name, i) => {
		return <Basket id = {Userlist[i].id} name = {Userlist[i].name} time = {Userlist[i].time} airport = {Userlist[i].airport} />
	})
	return (
		<div className = "airportblock grow" >
		<h4>{airport}</h4>
		{Basketmap}
		</div> );
	
}