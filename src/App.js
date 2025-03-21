import React from "react";
import NavScroll from "./page/acceuil/navbar";
import './App.css'
import Pageacceuil from './page/acceuil/acceuil'
import { Container } from "react-bootstrap";
 

function App() {
    return(
    <Container>
        <NavScroll/>
        <Pageacceuil/>
        </Container>
    )
}

export default App;

