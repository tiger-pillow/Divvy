import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Airport.css';
import Basket from  '../components/Basket.js';
import '../components/Basket.css';
import {users, airports} from '../components/fakedata.js';
import Scroll from '../components/Scroll';
import './Airport2.css'
import Signin from '../components/Signin'

class Airport2 extends Component {

	constructor (props){
		super(props);
		this.state = {
			startDate: new Date(),
			airports: airports,
			users: users
	};}
	
	onChange = date => {this.setState({startDate: date});};


	render () {
		const Airmaps = this.state.airports.map((name, i) => {
		return <Block date = {this.state.startDate} airport = {this.state.airports[i]} users = {this.state.users} />
	});


		return (
			<div className = "f3 tc">
			<Signin/>
			<header> 
				<DatePicker selected = {this.state.startDate} onChange = {this.onChange} />
			</header>
			<br></br>
			<Scroll> 
				{Airmaps}
			</Scroll>
			</div>
		);
	}
}
export default Airport2;


function Block ({date, airport, users}){

	const timelist = airport.times.map((time, i) => {
		return <Timeblock time = {time} date = {date} airport = {airport} users = {users}/>
	});

	return (
		<div className = "airportblock grow" >
		<h4>{airport.name}</h4>
		{timelist}
		</div> );	
}

function Timeblock ({time, date, airport, users}){

	const Userlist = users.filter(user => {
		return (Number(user.month) === (date.getMonth()+1) 
			&& Number(user.date) === date.getDate()
			&& user.airport.toLowerCase() === airport.name.toLowerCase()
			&& user.time === time)
	});

	const Basketmap = Userlist.map((name, i) => {
		return <Basket id = {Userlist[i].id} name = {Userlist[i].name} time = {Userlist[i].time} airport = {Userlist[i].airport} />
	})

	return (
		<div className = "bg-light-red dib br2 pa1 ma1 grow " >
		<h5>{time}</h5>
		{Basketmap}
		</div> )

}



