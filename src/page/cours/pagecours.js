import React from "react";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function Pagecours() {
    return (

        <Container>
            <Row>
                <Col>
                    <h2>Mais les cours proposés, c’est quoi? </h2>
                    <p>Mon site de cours de français en ligne propose une large gamme de
                        formations adaptées à tous les niveaux, du débutant au confirmé. Que
                        vous souhaitiez apprendre les bases, améliorer votre grammaire,
                        enrichir votre vocabulaire ou perfectionner votre expression orale,
                        mes cours interactifs et progressifs vous accompagneront dans votre
                        apprentissage.</p>



                    <p> <b> Mes cours de français en ligne 📚✨</b> </p>
                    <ul className="list-cours">

                        <li>🆕 <b>Débutants :</b> Apprenez les bases (alphabet, salutations, grammaire).</li>

                        <li>📖 <b>Grammaire :</b> Maîtrisez les conjugaisons et les règles essentielles.</li>

                        <li>🗣️ <b>Expression orale :</b> Parlez avec confiance grâce à des exercices pratiques.</li>

                        <li>💼 <b>Français pro : </b>Rédigez des emails, préparez des réunions et communiquez efficacement.</li>

                        <li>✍️ <b>Atelier d’écriture : </b>Améliorez votre style et enrichissez votre vocabulaire.</li>

                        <p className="message-cours"><b>💡 Progressez à votre rythme avec des leçons interactives et un suivi personnalisé ! 🚀</b></p>
                    </ul>
                </Col>
            </Row>
        </Container>
    );

}
export default Pagecours;