
import { Navbar, Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import("../Navbar/Navbar.css");

function NavbarP() {
  return (
    
    <div>
    <>
  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/page1">Home</Nav.Link>
      <Nav.Link href="/FeedPost">Features</Nav.Link>
      <Nav.Link href="/Connect">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <br />
  
</>








    
    </div>

      

      
    
  );
}

export default NavbarP;
