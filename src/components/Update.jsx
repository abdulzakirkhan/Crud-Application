/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

export default function Update() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
  const allUsers = useSelector((state) => state.app.users);
  const [updateData, setUpdateData] = useState();

  useEffect(() => {
    const singleUser = allUsers.filter((ele) => ele.id === id);
    setUpdateData(singleUser[0]);
  }, []);
  console.log(updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(updateUser(updateData))
      navigate("/all-users");
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md="12" className="d-flex justify-content-center text-center">
            <div className="bg-black px-5">
              <h1 className="text-white px-5 mx-5">Update User</h1>
            </div>
          </Col>
          <Col md="8" sm="12">
            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={updateData && updateData.name}
                    onChange={newData}
                  className="input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  className="input"
                  value={updateData && updateData.email}
                  onChange={newData}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  className="input"
                  value={updateData && updateData.age}
                  onChange={newData}
                />
              </Form.Group>
              <Form.Group className="d-flex gap-5 justify-content-center">
                <Form.Check
                  type="checkbox"
                  name="gender"
                  value={"Male"}
                  label="Male"
                  checked={updateData && updateData.gender === "Male"}
                  onChange={newData}
                />
                <Form.Check
                  type="checkbox"
                  name="gender"
                  value={"Female"}
                  label="Female"
                  checked={updateData && updateData.gender === "Female"}
                  onChange={newData}
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
    </div>
  );
}
