import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Kolkata from './KolkataImage.jsx';
import Footer from '../components/Footer.jsx';
export default class Kolkatapage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Kolkata/>
             <Footer/>
            </>
        )
    }
}