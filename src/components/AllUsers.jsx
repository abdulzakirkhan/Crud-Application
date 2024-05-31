/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../features/userDetailSlice";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function AllUsers() {
  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
    console.log(users);
  }, []);
  if (loading) {
    return (
      <div
        className="position-absolute w-100 text-center"
        style={{ left: "-20px" ,top:"35%"}}
      >
        <Loader />
      </div>
    );
  }

  return (
    <Container className="mt-5 pt-5">
      <Row className="pb-5">
        <Col md="12" lg="12">
          {showPopUp && (
            <UserModal
              id={id}
              showPopUp={showPopUp}
              setShowPopUp={setShowPopUp}
            />
          )}
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
                        <span className="px-2">Age: </span> {ele.age}
                      </div>
                      <div className="">
                        <span className="px-2">Email:</span>
                        {ele.email}
                      </div>
                      <div className="">
                        <span className="px-2">Gender:</span>
                        {ele.gender}
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        className="mx-2 my-sm-2 my-md-2 my-lg-0"
                        onClick={() => [setId(ele.id), setShowPopUp(true)]}
                      >
                        View
                      </Button>
                      <Link
                        to={`/edit/${ele.id}`}
                        className="mx-2 my-sm-2 my-md-2 my-lg-0"
                      >
                        Edit
                      </Link>
                      <Button
                        className="mx-2 my-sm-2 my-md-2 my-lg-0"
                        onClick={() => dispatch(deleteUser(ele.id))}
                      >
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
