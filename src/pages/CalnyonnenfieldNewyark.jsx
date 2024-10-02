import React from 'react';
import Navbar from '../components/Navbar.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Calnyonn extends React.Component{
  constructor(props){
    super(props)
    console.log(props);
    this.state={
        data:[]
    }
}

componentDidMount(){
    let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=6302945339");
    api.then(x=>x.json()).then(y=>{
        this.setState({data:[y]});
   });
   console.log(this.state.data);
   
}
    
  
  render(){
    return(
        <>
        
        <Navbar/>
        <div id="lastt">
            <h1>Calnyonnenfield</h1>
            <p id="lp">This is a mind-blowing adventure!</p>
            <br />
            <div >
            
                {this.state.data.map((x,y)=>{
                    return(
                      
                        <>
                        
                       <div id="flow">
                          <h1>{x.Name}</h1>
                        
                          <Carousel >
                          <img src={x.images[0]} alt="" />
                          <img src={x.images[1]} alt="" />
                          <img src={x.images[2]} alt="" />
                          </Carousel>
                          
                        
                        </div>
                        <h2>About Experiance</h2>
                        <p>{x.content}</p>
                       
                        <div>
                      
                        </div>
                       
                        </>
                    )
                })}
            </div>   
       </div>  
       </>
    )
}
}