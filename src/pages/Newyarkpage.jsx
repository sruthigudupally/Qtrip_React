import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Newyark from './NewyorkImage.jsx';
import Footer from '../components/Footer.jsx';
export default class Newyarkpage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Newyark/>
             <Footer/>
            </>
        )
    }
}

