import React from "react";
import Container from 'react-bootstrap/Container';
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import { Row } from "react-bootstrap";


const temoignages = [
    { id: 1, nom: "Alice Dupont", commentaire: "Un excellent service ! J'ai énormément progressé en peu de temps.", etoiles: 5 },
    { id: 2, nom: "Marc Lambert", commentaire: "Super cours, très pédagogiques et accessibles !", etoiles: 4 },
    { id: 3, nom: "Sophie Morel", commentaire: "J'apprécie beaucoup la patience et la clarté des explications.", etoiles: 5 },
];


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Container>
        <Row>
        <Col className="text-center" >
        <h2><b>Les Avis</b></h2>
        <p> Découvrez ce que mes apprenants pensent de mes cours ! ⭐ Grâce à
            leurs témoignages, plongez dans leur expérience et voyez comment mes
            cours les ont aidés à progresser en français. Leur motivation
            et leurs réussites sont ma plus belle récompense ! 💬✨</p>
    <Slider {...settings} className="text-center py-3 avis-slide">
     {temoignages.map((temoignage) => (
        <div key={temoignage.id}>
          <h3>{temoignage.nom}</h3>
          <p>{temoignage.commentaire}</p>
          <div><strong>Note: </strong>{temoignage.etoiles}  /5 </div>
        </div>
      ))}
    </Slider>
    </Col>
    </Row>
    </Container>
  );
}
