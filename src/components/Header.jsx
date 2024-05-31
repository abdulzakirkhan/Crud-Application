import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const allUsers=useSelector((state) => state.app.users)
  return (
    <Navbar expand="lg" bg="dark" className="py-3">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">
          Crud App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white">
              <Link className="text-decoration-none text-white" to={"/"}>
                Create Post
              </Link>
            </Nav.Link>
            <Nav.Link className="text-white">
              <Link
                className="text-decoration-none text-white"
                to={"/all-users"}
              >
                All Post <span className="bg-gradient bg-info rounded-circle custbadge">{allUsers.length}</span>
              </Link>
            </Nav.Link>
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
