import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Malaysia from './MalaysiaImage.jsx';
import Footer from '../components/Footer.jsx';
export default class Malaysiapage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Malaysia/>
             <Footer/>
            </>
        )
    }
}