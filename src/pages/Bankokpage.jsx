import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Bankok from './BankokImage.jsx';
import Footer from '../components/Footer.jsx';
export default class Bankokpage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Bankok/>
            <Footer/>
             
            </>
        )
    }
}