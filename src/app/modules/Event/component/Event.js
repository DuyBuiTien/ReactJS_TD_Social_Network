import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Pagination, Button, Card, Jumbotron, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { requestGET, GLOBAL_URL } from '../../../basic/basicApi'

export const Event = (props) => {

  const [groupMem, setGroupMem] = useState()
  const { user } = useSelector(state => state.auth);
  const history = useHistory();

  useEffect(() => {
    
    return () => {
    }
  }, [])

  return (
    <Container fluid >
      <Row style={{ backgroundColor: '#e1e2e1', display: 'flex', alignContent: 'center', justifyContent: 'center', height: '10rem', position: 'relative' }}>
        <Image fluid src="https://iqonic.design/themes/socialv/vue/dist/img/profile-bg6.27426e01.jpg"></Image>
        <Jumbotron style={{ fontSize: "25px", fontWeight: "bold", padding: '1rem', margin: '4rem', position: 'absolute', heigth: "2rem" }}>SỰ KIỆN</Jumbotron>
      </Row>
      <div className="col-lg-12" style={{ marginTop: '8rem' }}>
        
      </div>
    </Container >
  )
}