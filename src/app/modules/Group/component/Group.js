import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Pagination, Button} from 'react-bootstrap'

import {requestGET, GLOBAL_URL} from '../../../basic/basicApi'

export const Group = () => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch()
    console.log(data)
    return () => {
    }
  }, [])

  const fetch = async() => {
    var data = await requestGET(`${GLOBAL_URL}v1/group/ListGroup?page=0&perpage=20`)
    setData(data)
  }

  return (
    <Container fluid >
      <Row style={{ backgroundColor: '#e1e2e1', display: 'flex', alignContent: 'center', justifyContent: 'center', height: '10rem' }}>
        <h>NHÓM</h>
      </Row>
      <Row style={{ color: '#ffff' }}>
        <Col style={{ color: '#ffff' }}>
          {/* <Card style={{ width: '5rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
        </Col>
        <Pagination></Pagination>
      </Row>
    </Container >
  )
}