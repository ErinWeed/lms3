import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ title }) => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="text-primary">
          {title}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="link-primary">
            Home
          </Nav.Link>
          <Nav.Link href="teams">Zones</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
