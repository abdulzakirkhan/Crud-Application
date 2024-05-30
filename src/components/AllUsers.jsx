/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function AllUsers() {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col md="12" lg="12">
          <Row className="justify-content-center">
            <Col md="4" lg="4" sm="12">
              <Card>
                <Card.Header>
                  <Card.Title>title</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores vel voluptate saepe quidem tenetur eveniet inventore eos maiores possimus?</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
