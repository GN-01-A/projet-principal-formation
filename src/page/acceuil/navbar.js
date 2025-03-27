import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import monLogo from '../Image/DALL·E-2025-02-28-15.13-modified.png';
import Row from 'react-bootstrap/Row';
 
function NavScroll() { {/* Vient de Bootstrap */}
  return (
    <Container fluid className="p-0"> 
      <Row>
    <Navbar expand="lg" style={{ backgroundColor: '#6C9A8F', }}>
        <Navbar.Brand href="#" className='logo'>
            <img
                src={monLogo}
                alt='logo'
                style={{ width: '50px', height: 'auto' }}
                fluid
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-center"
            navbarScroll
          >
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="#a propos">Présentation</Nav.Link>
            <Nav.Link href="#cours">Cours</Nav.Link>
            <Nav.Link href="#tarif">Tarifs</Nav.Link>
            <Nav.Link href="#temoignage">Témoignages</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link onClick={() => {
              window.open(`${window.location.origin}/subscription`, '_blank')
            }
            }>Réserver un cours</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Row>
      </Container>
  );
}
 
export default NavScroll;