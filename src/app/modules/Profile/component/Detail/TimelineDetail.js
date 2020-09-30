import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Figure } from 'react-bootstrap'
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
              <Figure style={{ width: '30%', height: '30%', margin: '1.5%' }}>
                <Figure.Image style={{borderRadius: '5%'}} src="/media/users/100_1.jpg"></Figure.Image>
                <Figure.Caption>Anna Rexia</Figure.Caption>
              </Figure>

              <Figure style={{ width: '30%', height: '30%', margin: '1.5%' }}>
                <Figure.Image style={{borderRadius: '5%'}} src="/media/users/100_8.jpg"></Figure.Image>
                <Figure.Caption>Anna Rexia</Figure.Caption>
              </Figure>

              <Figure style={{ width: '30%', height: '30%', margin: '1.5%' }}>
                <Figure.Image style={{borderRadius: '5%'}} src="/media/users/100_2.jpg"></Figure.Image>
                <Figure.Caption>Anna Rexia</Figure.Caption>
              </Figure>

              <Figure style={{ width: '30%', height: '30%', margin: '1.5%' }}>
                <Figure.Image style={{borderRadius: '5%'}} src="/media/users/100_3.jpg"></Figure.Image>
                <Figure.Caption>Anna Rexia</Figure.Caption>
              </Figure>

              <Figure style={{ width: '30%', height: '30%', margin: '1.5%' }}>
                <Figure.Image style={{borderRadius: '5%'}} src="/media/users/100_4.jpg"></Figure.Image>
                <Figure.Caption>Anna Rexia</Figure.Caption>
              </Figure>

              <Figure style={{ width: '30%', height: '30%', margin: '1.5%' }}>
                <Figure.Image style={{borderRadius: '5%'}} src="/media/users/100_5.jpg"></Figure.Image>
                <Figure.Caption>Anna Rexia</Figure.Caption>
              </Figure>
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