// import {useState,useEffect} from 'react';
// import {Link} from 'react-router-dom'
// function Imagefetch(){
//  let [state,setState]=useState({data:[]});
//  let [search,upsearch]=useState('')
//     useEffect(()=>{
//     let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
//     api.then(x=>x.json()).then(y=>{
//         // console.log(state.data);
//         setState({data:y})
       
//     },[state])
//     console.log(state);
//     })
//     return(
       
//             <>
           
//            <div id="homeimage">
//             <input type="text"  onChange={(e)=>upsearch(e.target.value)} id="input"  />
//             </div>
//             <div id="parent" >
//             {state.map(pa=>{
//                 return(
//                     <>
//                      <div class="card1">
//                    <Link to={"/"+pa.id}>
//                    <img src={pa.image} alt="" class="imgss" />
//                    </Link> 
//                 </div>
        
               
//                  <div >
//                      <h3 class="homepara" id="city">{pa.city.toUpperCase()}</h3>
//                      <br />
//                       <h3 class="homepara" id="descri">{pa.description.toUpperCase()}</h3>
                
//                  </div>
               

//                     </>
//                 )
//             })}
//              </div>
//             </>
       
//     )
// }
// export default Imagefetch;



import React from 'react';
import {Link} from 'react-router-dom'
export default class Imagefetch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities");
        api.then(x=>x.json()).then(y=>{
            this.setState({data:y});
       });
       console.log(this.state.data);
       
    }
    
    
   render(){
    return(
        <>
        <div id="homeimage">
        
        {this.state.data.map((pa,y)=>{
            return(
                <>
             
             
                <div className="card1" key={y}>
                <Link to={"/"+pa.id}>
                <img src={pa.image} alt="" className="imgss" />
                </Link> 
                </div>
        
               
                <div >
                     <h3 className="homepara" id="city">{pa.city.toUpperCase()}</h3>
                     <br />
                     <h3 className="homepara" id="descri">{pa.description.toUpperCase()}</h3>
                
                </div>
              
               
                </>
            )
        })
    }
    </div>
    </>
    )           
   }
}
















