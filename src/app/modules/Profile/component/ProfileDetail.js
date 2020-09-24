import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';

import { requestGET, GLOBAL_URL } from '../../../basic/basicApi';
import { toAbsoluteUrl, checkIsActive } from '../../../../_metronic/_helpers';


export const ProfileDetail = () => {

  const { user } = useSelector(state => state.auth);
  console.log(user)

  return (
    <Container fluid>
      <Row style={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '28rem', backgroundColor: '#ffff', borderRadius: '0.5rem' }}>
        <Image
          src={toAbsoluteUrl('/media/svg/shapes/abstract-9.svg')}
          style={{ width: '100%', top: '1rem', height: '18rem', borderRadius: '0.5rem' }}></Image>
        <Image
          src={toAbsoluteUrl('/media/svg/humans/custom-3.svg')}
          style={{ position: 'absolute', top: '10rem', backgroundColor: '#E0E0E0', borderRadius: '50%', width: '10rem', heigth: '10rem'}}  
        ></Image>
        <h style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#37474F'}}>{user.fullName.toUpperCase()}</h>
      </Row>
    </Container>
  )
}