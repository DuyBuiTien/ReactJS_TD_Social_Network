import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const TimelineDetail = () => {
  return (
    <Container fluid style={{padding: '0'}}>
      <Row>
        <Col sm={4} xl={4} xs={4} lg={4} md={4}>
          <Card border={'light'}>
            <Card.Header>Life Event</Card.Header>
            <Card.Body>
              <Card.Title>Light Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={8} xl={8} xs={8} lg={8} md={8}>
          <Card border={'light'}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Light Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}