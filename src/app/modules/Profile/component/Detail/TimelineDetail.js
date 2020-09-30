import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import ListPostDetail from './ListPostDetail'
import NewPostDetail from './NewPostDetail'

export const TimelineDetail = () => {
  return (
    <Container fluid style={{ padding: '0' }}>
      <Row>
        <Col sm={4} xl={4} xs={4} lg={4} md={4}>
          <Card border={'light'}>
            <Card.Header>Photos</Card.Header>
            <Card.Body style={{ display: 'block', justifyContent: 'space-around', padding: '1rem', verticalAlign: 'middle' }}>
              <Card.Img style={{ width: '30%', height: '30%', margin: '1.5%' }} src="/media/project-logos/1.png"></Card.Img>
              <Card.Img style={{ width: '30%', height: '30%', margin: '1.5%' }} src="/media/project-logos/2.png"></Card.Img>
              <Card.Img style={{ width: '30%', height: '30%', margin: '1.5%' }} src="/media/project-logos/3.png"></Card.Img>
              <Card.Img style={{ width: '30%', height: '30%', margin: '1.5%' }} src="/media/project-logos/4.png"></Card.Img>
              <Card.Img style={{ width: '30%', height: '30%', margin: '1.5%' }} src="/media/project-logos/5.png"></Card.Img>
              <Card.Img style={{ width: '30%', height: '30%', margin: '1.5%' }} src="/media/project-logos/6.png"></Card.Img>
            </Card.Body>
          </Card>

          <Card style={{marginTop: '1rem'}}>
            <Card.Header>Friends</Card.Header>
            <Card.Body style={{ display: 'inline-block', justifyContent: 'space-around' }}>
              <div style={{ width: '30%', height: '30%' }}>
                <Card.Img  src="/media/users/100_1.jpg"></Card.Img>
                <p>Anna Rexia</p>
              </div>

              <div style={{ width: '30%', height: '30%' }}>
                <Card.Img  src="/media/users/100_1.jpg"></Card.Img>
                <p>Anna Rexia</p>
              </div>

              <div style={{ width: '30%', height: '30%' }}>
                <Card.Img  src="/media/users/100_1.jpg"></Card.Img>
                <p>Anna Rexia</p>
              </div>

              <div style={{ width: '30%', height: '30%' }}>
                <Card.Img  src="/media/users/100_1.jpg"></Card.Img>
                <p>Anna Rexia</p>
              </div>

              <div style={{ width: '30%', height: '30%' }}>
                <Card.Img  src="/media/users/100_1.jpg"></Card.Img>
                <p>Anna Rexia</p>
              </div>

              <div style={{ width: '30%', height: '30%' }}>
                <Card.Img  src="/media/users/100_1.jpg"></Card.Img>
                <p>Anna Rexia</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={8} xl={8} xs={8} lg={8} md={8}>
          <NewPostDetail/>
          <ListPostDetail></ListPostDetail>
        </Col>
      </Row>
    </Container>
  )
}