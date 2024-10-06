import React from 'react';
import { Link } from 'react-router-dom';
export default class Singapur extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=singapore");
        api.then(x=>x.json()).then(y=>{
            this.setState({data:y});
       });
       console.log(this.state.data);
       
    }
    
    
   render(){
    return(
        <>
        <div id="image">
        {this.state.data.map(pa=>{
            return(
                <>
                <div className="imgdiv1">
                <Link to={"/"+pa.name}>
                <img src={pa.image} alt="" className="imgs" />
                </Link>
                <div className="para1">
                <h3>{pa.name}</h3>
                <p className="cardpara">R.{pa.costPerHead}</p>
                <h3>Duration</h3>
                <p className="cardpara">{pa.duration}</p>
                </div>
                <button id="cat">{pa.category}</button>
                </div>
                </>
            )
             
        })}
        </div>
       
        </>
    )
   }
}


























