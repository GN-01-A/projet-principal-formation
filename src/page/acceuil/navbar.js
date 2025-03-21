import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import monLogo from '../Image/DALL·E-2025-02-28-15.13-modified.png';
 
function NavScroll() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#6C9A8F', }}>
      <Container fluid>
        <Navbar.Brand href="#">
            <img
                src={monLogo}
                alt='logo'
                style={{ width: '50px', height: 'auto' }}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: '100px', }}
            navbarScroll
          >
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">Présentation</Nav.Link>
            <Nav.Link href="#action3">Cours</Nav.Link>
            <Nav.Link href="#action4">Tarifs</Nav.Link>
            <Nav.Link href="#action5">Témoignages</Nav.Link>
            <Nav.Link href="#action6">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavScroll;