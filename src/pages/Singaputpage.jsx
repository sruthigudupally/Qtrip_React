import React from 'react';
import Navbar  from '../components/Navbar.jsx';
import Content from './Content.jsx';
import Singapur from './SingapurImage.jsx';

export default class Singapurpage extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Content/>
            <Singapur/>
             
            </>
        )
    }
}