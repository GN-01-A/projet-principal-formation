import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const tarifs = [
    { titre: "Cours Individuel", prix: "25€/h par leçon", description: "Un cours particulier adapté à votre niveau." },
    { titre: "Pack 5 Cours", prix: "15€ par mois", description: "Profitez d’un tarif réduit en achetant 5 cours." },
    { titre: "Pack 10 Cours", prix: "50€ par mois", description: "Boostez votre apprentissage avec 10 cours." },
  ];

function Pagetarif() {
    return (

        <Container>
            <div>
                <h2>Tarification</h2>
            </div>
        {tarifs.map((tarif, index) => (
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title>{tarif.titre}</Card.Title>
                <Card.Text>{tarif.description}</Card.Text>
                <p><b>{tarif.prix}</b></p>
              </Card.Body>
            </Card>
        ))}
        </Container>
    );
}
export default Pagetarif;