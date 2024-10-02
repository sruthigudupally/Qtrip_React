import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <>
            <div id="nav">
                <span id="trip">QTrip</span>
                <span class="two">Home</span>
                <span class="two">Reservations</span>
                <span id="login">Login here</span>
                <button id="but">Register</button>

            </div>
             
            </>
        )
    }
}