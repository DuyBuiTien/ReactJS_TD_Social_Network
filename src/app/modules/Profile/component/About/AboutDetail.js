import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, Nav } from 'react-bootstrap';

export const AboutDetail = (props) => {
  const [selected, setSelected] = useState('basicInfor')

  return (
    <Container fluid>
      <Row style={{ width: '100%', padding: '0px' }}>
        <Card style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <Nav variant="pills" style={{ display: 'flex', flexDirection: 'column', margin: '1rem' }} defaultActiveKey={'basicInfo'}>
            <Nav.Item>
              <Nav.Link eventKey='basicInfo' onSelect={() => { setSelected('basicInfor') }}>Thông tin cơ bản</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='work' onSelect={() => { setSelected('work') }}>Công việc</Nav.Link>
            </Nav.Item>
          </Nav>
          {selected === 'basicInfor' && <div style={{ width: '80%' }}>
            <Card.Header as={'h1'}>Thông tin cơ bản</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={3} xl={3} xs={3} lg={3} md={3}>
                  <Card.Text>Họ và tên</Card.Text>
                  <Card.Text>Email</Card.Text>
                  <Card.Text>Ngày sinh</Card.Text>
                  <Card.Text>Giới tính</Card.Text>
                </Col>

                <Col sm={9} xl={9} xs={9} lg={9} md={9}>
                  <Card.Text style={{ fontStyle: 'italic' }}>{props.data.fullName}</Card.Text>
                  <Card.Text style={{ fontStyle: 'italic' }}>{props.data.email}</Card.Text>
                  <Card.Text style={{ fontStyle: 'italic' }}>{props.data.birthday}</Card.Text>
                  <Card.Text style={{ fontStyle: 'italic' }}>{props.data.sex}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </div>}

          {selected === 'work' && <div style={{ width: '80%' }}>
            <Card.Header as={'h1'}>Công việc</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={3} xl={3} xs={3} lg={3} md={3}>
                  <Card.Text>Đơn vị công tác</Card.Text>
                  <Card.Text>Vị trí công tác</Card.Text>
                </Col>

                <Col sm={9} xl={9} xs={9} lg={9} md={9}>
                  <Card.Text style={{ fontStyle: 'italic' }}>{props.data.office.name}</Card.Text>
                  <Card.Text style={{ fontStyle: 'italic' }}>{props.data.position.name}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </div>}
        </Card>
      </Row>
    </Container>
  )
}