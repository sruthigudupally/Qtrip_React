import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Banglore from './BangloreImages.jsx';
import Footer from '../components/Footer.jsx';

export default class Banglorepage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Banglore/>
            <Footer/>
             
            </>
        )
    }
}