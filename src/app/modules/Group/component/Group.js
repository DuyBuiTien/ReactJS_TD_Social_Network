import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Pagination, Button, Card, Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { requestGET, GLOBAL_URL } from '../../../basic/basicApi'

export const Group = (props) => {

  const [groupMem, setGroupMem] = useState()
  const { user } = useSelector(state => state.auth);
  const history = useHistory();

  useEffect(() => {
    fetch()
    return () => {
    }
  }, [])

  const handleClick = (id) => history.push(`groups/${id}`);

  const fetch = async () => {
    var data = await requestGET(`${GLOBAL_URL}/v1/group/ListGroup?page=0&perpage=20`)
    var group = []
    data !== undefined && data.data.map((i) => {
      var count = 0
      while (count <= i.users.length - 1) {
        if (i.users[count].id === user.id) {
          group.push(i)
          break
        }
        count++
      }
    })
    setGroupMem(group)
  }

  return (
    <Container fluid >
      <Row style={{ backgroundColor: '#e1e2e1', display: 'flex', alignContent: 'center', justifyContent: 'center', height: '10rem' }}>
        {/* <h style={{fontSize: "25px", fontWeight: "bold"}}>NHÓM</h> */}
        <Jumbotron style={{ fontSize: "25px", fontWeight: "bold", padding: '1rem', margin: '0px' }}>NHÓM</Jumbotron>
      </Row>
      <Row style={{ marginTop: '1.5rem' }}>
        {groupMem !== undefined && groupMem.map((item) => {
          console.log(item)
          return (
            <Col style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Card style={{ width: '30rem', borderRadius: '0.5rem' }}>
                <Card.Img
                  src="https://iqonic.design/themes/socialv/vue/dist/img/profile-bg1.12dbfea2.jpg"
                ></Card.Img>
                <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description == "" ? "Some quick example text" : item.description}</Card.Text>
                  <Button variant="primary" size="sm" onClick={() => handleClick(item.id)}>Xem bài</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
        <Pagination></Pagination>
      </Row>
    </Container >
  )
}