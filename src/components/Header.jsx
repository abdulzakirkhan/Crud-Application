import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" bg="dark" className="py-3">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">RTK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">Create Post</Nav.Link>
            <Nav.Link href="#action2" className="text-white">All Post</Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-end w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-75 text-white bg-transparent search py-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
