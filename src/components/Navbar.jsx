import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <>
            <div id="nav">
                <span id="trip">QTrip</span>
                <span className="two">Home</span>
                <span className="two">Reservations</span>
                <span id="login">Login here</span>
                <button id="but">Register</button>

            </div>
             
            </>
        )
    }
}