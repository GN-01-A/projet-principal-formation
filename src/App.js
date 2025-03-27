import React from "react";
import NavScroll from "./page/acceuil/navbar";
import './App.css'
import Pageacceuil from './page/acceuil/acceuil'
import Pageapropos from './page/apropos/apropos'
import Pagecours from "./page/cours/pagecours";
import Pagetarif from "./page/tarif/pagetarif";
import UncontrolledExample from "./page/Témoignage/temoignage";
import Pagecontact from "./page/contact/contact";
 

function App() {
    return(
        <>
        <NavScroll/>
        <Pageacceuil/>
        <Pageapropos/>
        <Pagecours/>
        <Pagetarif/>
        <UncontrolledExample/>
        <Pagecontact/>
        </>
    )
}

export default App;

