import React from 'react';

export default class Content extends React.Component{
    render(){
        return(
            <>
            <div id="paragraph">
            <h1 id="bgh1" className="content">Explore all adventures</h1>
            <br />
            <p className="content" id="bgpara">Here's a list of places that you can explore in city</p>
            </div>
            <br />
            {/* <hr  class="content"/> */}
            <br />
            
            <section id="inputdiv" className="content">
            <span  className="content1">Filter</span><span><input type="text" placeholder='filterbyDuration' className="contentinput"/> </span>
            <span>Clear </span>
            <input type="text" placeholder='add Category' className="contentinput"/>
            <span>Clear </span>
          <input type="text" placeholder='search adventure'  className="contentinput"/>
          <span>Clear </span>
          
          </section>

        <br />
       {/* <hr class="content" /> */}
             
            </>
        )
    }
}










