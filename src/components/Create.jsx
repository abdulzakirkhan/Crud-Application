/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {  useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Create() {
  const dispatch=useDispatch()
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
  const handleSubmit = (event) => {
      event.preventDefault();
    console.log(users)
    dispatch(createUser(users))
    navigate("/all-users")
  };
  
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md="12" className="d-flex justify-content-center text-center">
          <div className="bg-black px-5">
            <h1 className="text-white px-5 mx-5">Create User</h1>
          </div>
        </Col>
        <Col md="8" sm="12">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={getUserData}
                className="input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="input"
                onChange={getUserData}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                className="input"
                onChange={getUserData}
              />
            </Form.Group>
            <Form.Group className="d-flex gap-5 justify-content-center">
              <Form.Check
                type="checkbox"
                name="gender"
                value={"Male"}
                label="Male"
                onChange={getUserData}
              />
              <Form.Check
                type="checkbox"
                name="gender"
                value={"Female"}
                label="Female"
                onChange={getUserData}
              />
            </Form.Group>
            <Form.Group>
              <Button
                type="submit"
                className="w-100 bg-transparent text-black mt-3"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Create;
