/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/userDetailSlice";

export default function AllUsers() {
  const users = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    console.log(users);
  }, []);

  return (
    <Container className="mt-5 pt-5">
      <Row className="pb-5">
        <Col md="12" lg="12">
          <Row className="justify-content-center g-4">
            {users &&
              users.map((ele, index) => (
                <Col md="4" lg="4" sm="12" key={index}>
                  <Card>
                    <Card.Header>
                      <Card.Title>{ele.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis asperiores vel voluptate saepe quidem
                        tenetur eveniet inventore eos maiores possimus?
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
