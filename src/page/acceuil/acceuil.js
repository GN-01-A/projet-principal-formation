import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import imageacceuil from '../Image/DALL·E-2025-02-28-13.36 1.jpg';


function Pageacceuil() {
    return (
        <Container >
            <div>
                <h1>Apprenez le français en ligne, facilement et efficacement !</h1>
            </div>
            
                <div>
                <p>Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau !
                Que vous soyez débutant ou avancé, bénéficiez d'un apprentissage dynamique et efficace avec une professeure expérimentée !</p>
            </div>
            
            <div>
            <Button href="/subscription">Réservez un cours !</Button>
            <Button href="/contact">Contactez-moi !</Button>
             </div>

            <div>
            <img
                src={imageacceuil}
                alt='image'
                className="img-fluid"
                />
            </div>
        </Container>

    );
}
export default Pageacceuil;