import React from 'react';

function InitialForm  ({onRouteChange}){
	return ( 
		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
		<main className="pa4 black-80">
		  <form className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Last Step</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" for="email-address">Yale Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="ms3">
		        <label className="db fw6 lh-copy f6" for="password">Name</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" for="password">Phone Number</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
		      </div>
		      <label className="pa0 ma0 lh-copy f6 pointer"> <input type="checkbox"/> Remember me</label>
		    </fieldset>
		    <div className="">
		      <input 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      type="submit" 
		      value="Submit"
		      onClick = {() => onRouteChange('Thank')} />
		    </div>
		    <div className="lh-copy mt3">
		      {/*<a href="#0" className="f6 link dim black db">Register</a> */}
		      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
		    </div>
  		  </form>
  		</main> 
  		</article>
  		);
}

export default InitialForm