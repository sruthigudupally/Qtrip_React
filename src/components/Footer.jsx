import React from 'react';
export default class Footer extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        
    }
    render(){
        return(
            <div id="footer">© QTrip 2022</div>
        )
    }
}