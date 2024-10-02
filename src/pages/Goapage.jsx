import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Goa from './GoaImage.jsx';
import Footer from '../components/Footer.jsx';
export default class Goapage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Goa/>
             <Footer/>
            </>
        )
    }
}