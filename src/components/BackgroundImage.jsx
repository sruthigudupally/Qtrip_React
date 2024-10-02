// import React from 'react';

// export default class Backgroundimage extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
        
//     }
    
//   }
//     render(){
//         return(
//             <>
//             <div id="background">
//                      <section id="sec1">
//                      <h1 class="container" id="h1" >Welcome to QTrip</h1>
//                      <p class="container" id="p1">
//                         Explore the world with fantastic places to venture around
//                      </p>
//                     <input  type="text" class="container" id="but2" placeholder="Search a City" />
//                     </section>
              
//             </div>
             
//             </>
//         )
//     }
// }







import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../Style/index.css";

export default function BackgroundImage() {
    const navigate = useNavigate();
    const [search, updatedSearch] = useState("");

    const change = (e) => {
        updatedSearch(e.target.value);
    };

    useEffect(() => {
        if (search) {
            let lowerCaseSearch = search.toLowerCase();
            if (lowerCaseSearch.includes("bengaluru")) {
                navigate("/bengaluru");
            } else if (lowerCaseSearch.includes("goa")) {
                navigate("/goa");
            }
            else if (lowerCaseSearch.includes("kolkata")) {
                navigate("/kolkata");
            }
            else if (lowerCaseSearch.includes("singapore")) {
                navigate("/singapore");
            }
            else if (lowerCaseSearch.includes("malaysia")) {
                navigate("/malaysia" );
            }
            else if (lowerCaseSearch.includes("bangkok")) {
                navigate("/bangkok");
            }
            else if (lowerCaseSearch.includes("newyork")) {
                navigate("/new-york" );
            }
            else if (lowerCaseSearch.includes("paris")) {
                navigate("/paris" );
            }
            else if (lowerCaseSearch.includes("niaboytown")) {
                navigate("/Niaboytown" );
            }
            else if (lowerCaseSearch.includes("perthby")) {
                navigate("/Perthby" );
            }
            else if (lowerCaseSearch.includes("thton")) {
                navigate("/Thton");
            }
            else if (lowerCaseSearch.includes("vangreatshot")) {
                navigate("/Vangreatshot");
            }
            else if (lowerCaseSearch.includes("st gosmydro")) {
                navigate("/St Gosmydro");
            }
            else if (lowerCaseSearch.includes("nishgam-in-haprnia")) {
                navigate("/Nishgam-In-Haprnia");
            }
            else if (lowerCaseSearch.includes("calnyonnenfield")) {
                navigate("/Calnyonnenfield");
            }
            else if (lowerCaseSearch.includes("lowtra")) {
                navigate("/Lowtra");
            }
            // else if (lowerCaseSearch.includes("wooddaux")) {
            //     navigate("/0355034513");
            // }
           


    // useEffect(() => {
    //     if (search) {
    //         const lowerCaseSearch = search.toLowerCase();
    //         if (lowerCaseSearch.includes("b","e","n","g","a","l","u","r","u")) {
    //             navigate("/bengaluru");
    //         } else if (lowerCaseSearch.includes("g","o","a")) {
    //             navigate("/goa");
    //         }
    //         else if (lowerCaseSearch.includes("k","o","l","k","a","t","a")) {
    //             navigate("/kolkata");
    //         }
    //         else if (lowerCaseSearch.includes("s","i","n","g","a","p","o","r","e")) {
    //             navigate("/singapore");
    //         }
    //         else if (lowerCaseSearch.includes("m","a","l","a","y","s","i","a")) {
    //             navigate("/malaysia" );
    //         }
    //         else if (lowerCaseSearch.includes("b","a","n","g","k","o","k")) {
    //             navigate("/bangkok");
    //         }
    //         else if (lowerCaseSearch.includes("n","e","w","y","o","r","k")) {
    //             navigate("/new-york" );
    //         }
    //         else if (lowerCaseSearch.includes("p","a","r","i","s")) {
    //             navigate("/paris" );
    //         }
             
    // }});

 
        
    }});

    return (
      <>
        <div id="background">
           <section id="sec1">
            <h1 class="container" id="h1">Welcome to QTrip</h1>
            <p  class="container" id="p1">Explore the world with fantastic places to venture around</p>
            <input
                onChange={change}
                type="search"
                class="container" id="but2"
                placeholder="Search a City"
                value={search} />
            </section>
      </div>
      </>
    );
}