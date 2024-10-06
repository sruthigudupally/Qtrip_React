import React from 'react'
import Error from './pages/Errorpage.jsx';
import Homepage from "./components/Homepage.jsx";
import Banglorepage from  "./pages/Banglorepage.jsx"
import Niaboytown from './pages/Niaboytown.jsx'
import Goapage from './pages/Goapage.jsx'
import  Perthbygoa from './pages/Perthbygoa.jsx'
import Kolkatapage from './pages/Kolkatapage.jsx'
import Thton from './pages/ThtonKolkata.jsx'
import Singapurpage from './pages/Singaputpage.jsx'
import Vangreat from './pages/VangreatSingapur.jsx'
import Malaysiapage from './pages/Malaysiapage.jsx'
import Stgos from './pages/StGosmydroMalaysia.jsx'
import Bankokpage from './pages/Bankokpage.jsx'
import Nishgam from './pages/NishgamBankok.jsx'
import Newyarkpage from './pages/Newyarkpage.jsx'
import Calnyonn from './pages/CalnyonnenfieldNewyark.jsx'
import Parispage from './pages/Parispage.jsx'
import Lowtra from './pages/LowtraParis.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
         <Route path="*" element={<Error/>}/>
        <Route path="/bengaluru" element={<Banglorepage/>}/>
        <Route path="/Niaboytown"   element={<Niaboytown/>}/>

        <Route path="/goa" element={<Goapage/>}/> 
        <Route path="/Perthby" element={<Perthbygoa/>}/>

        <Route path="/kolkata" element={<Kolkatapage/>}/>
        <Route path="/Thton" element={<Thton/>}/>

        <Route path="/singapore" element={<Singapurpage/>}/>
        <Route path="/Vangreatshot" element={<Vangreat/>}/>

        <Route path="/malaysia" element={<Malaysiapage/>}/>
        <Route path="/St Gosmydro" element={<Stgos/>}/>

        <Route path="/bangkok" element={<Bankokpage/>}/>
        <Route path="/Nishgam-In-Haprnia" element={<Nishgam/>}/>

        <Route path="/new-york" element={<Newyarkpage/>}/>
        <Route path="/Calnyonnenfield" element={<Calnyonn/>}/>

        <Route path="/paris" element={<Parispage/>}/>
        <Route path="/Lowtra" element={<Lowtra/>}/>

        Lowtra

        


    </Routes>
   
    </BrowserRouter>
  );
}


