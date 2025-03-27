import React from "react";
import Container from 'react-bootstrap/Container';
import imageapropos from '../Image/DALL·E-2025-02-28-15.13-modified.png';
import { Row, Col } from "react-bootstrap";

function Pageapropos() {
    return (
        <Container>
            <Row>
                {/* Changement à partir de ordinateur */}
                <Col md={6} className="my-3 text-center"> {/* Vient de Bootstrap */}
                    <div>
                        <h2>Jane Doe </h2>
                    </div>

                    <div>
                        <p>Passionnée par l'enseignement du français, Nom Prénom,  met son expertise et son enthousiasme au service de ses élèves.
                            Grâce à une approche bienveillante et interactive, elle accompagne chaque apprenant vers une progression efficace et durable.</p>
                    </div>

                    <div>
                        <h2>Philosophie d’enseignement </h2>
                    </div>

                    <div>
                        <p>Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau !
                            Que vous soyez débutant ou avancé, bénéficiez d'un apprentissage dynamique et efficace avec une professeure expérimentée ! </p>
                    </div>

                    <div className="circle-container">
                        <div className="circle">Bienveillance</div>
                        <div className="circle">Pédagogie</div>
                        <div className="circle">Patience</div>
                    </div>
                </Col>
                    {/* Fin du changement et nouveau changement pour autre partie du site */}


                <Col md={6} className="text-center order-md-first">
                    <img
                        src={imageapropos}
                        alt='image'
                        className="w-50"
                        fluid
                    />

                    <div>
                        <h2>Mes diplômes </h2>
                    </div>

                    <div>
                        <p>Master en Didactique du Français Langue Étrangère (FLE)
                            CAPES de Lettres Modernes
                            DAEFLE (Diplôme d’Aptitude à l’Enseignement du FLE) </p>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default Pageapropos;