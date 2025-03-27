import React from "react";
import Col from 'react-bootstrap/Col';
import { Button, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import imageacceuil from '../Image/DALL·E-2025-02-28-13.36 1.jpg';
import { Image } from'react-bootstrap';


function Pageacceuil() {
    return (
        <Container> {/* Vient de Bootstrap */}
            {/* Changement à partir de ordinateur */}
            <Row>
                <Col md={6} xs={12} className="my-3 text-center"> {/* Vient de Bootstrap */}
                    <h1>Apprenez le français en ligne, facilement et efficacement !</h1>
                    <p>Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau !
                        Que vous soyez débutant ou avancé, bénéficiez d'un apprentissage dynamique et efficace avec une professeure expérimentée !</p>

                    <div>
                        <Button href="/subscription">Réservez un cours !</Button>
                        <Button href="/contact">Contactez-moi !</Button>
                    </div>
                    {/* Fin du changement et nouveau changement pour autre partie du site */}
                </Col>
                <Col md={6} xs={12}>

                    <Image
                        src={imageacceuil}
                        alt='image'
                        fluid />
                </Col>

            </Row>
        </Container>

    );
}
export default Pageacceuil;