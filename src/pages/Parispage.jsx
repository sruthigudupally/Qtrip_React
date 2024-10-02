import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Paris from './ParisImage.jsx';
import Footer from '../components/Footer.jsx';
export default class Parispage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Paris/>
             <Footer/>
            </>
        )
    }
}