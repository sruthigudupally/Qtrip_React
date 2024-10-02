import React from 'react';

export default class Content extends React.Component{
    render(){
        return(
            <>
            <div id="paragraph">
            <h1 id="bgh1" class="content">Explore all adventures</h1>
            <br />
            <p class="content" id="bgpara">Here's a list of places that you can explore in city</p>
            </div>
            <br />
            {/* <hr  class="content"/> */}
            <br />
            
            <section id="inputdiv" class="content">
            <span  class="content1">Filter</span><span><input type="text" placeholder='filterbyDuration' class="contentinput"/> </span>
            <span>Clear </span>
            <input type="text" placeholder='add Category' class="contentinput"/>
            <span>Clear </span>
          <input type="text" placeholder='search adventure'  class="contentinput"/>
          <span>Clear </span>
          
          </section>

        <br />
       {/* <hr class="content" /> */}
             
            </>
        )
    }
}










