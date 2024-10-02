import Navbar from './Navbar.jsx';
import BackgroundImage from './BackgroundImage.jsx'
import Imagesfetch from './Imagesfetch.jsx'
import Footer from './Footer.jsx';
import React from 'react';
export default class Homepage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <BackgroundImage/>
            <Imagesfetch/>
             <Footer/>
            </>
        )
    }
}