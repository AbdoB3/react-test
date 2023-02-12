import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes,Route, Link } from 'react-router-dom';

function Nave() {
  return (  
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand > <Link to='/'> Navbar </Link></Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/conteur'>conteur</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>Contact US</Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar> <br/> <br/>
    </>
  );
}

export default Nave;