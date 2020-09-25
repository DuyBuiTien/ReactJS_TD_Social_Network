import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

import { requestGET, GLOBAL_URL } from '../../../basic/basicApi';
import { toAbsoluteUrl, checkIsActive } from '../../../../_metronic/_helpers';


export const ProfileDetail = () => {

  const { user } = useSelector(state => state.auth);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const getData = async() => {
      var data = await requestGET(`${GLOBAL_URL}/v1/user/GetUserInfo?username=${location.pathname.split("/").pop()}`)
      setData(data)
      setLoading(false)
    }
    getData();
  }, []);

  return (
    <Container fluid>
      <Row style={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '28rem', backgroundColor: '#ffff', borderRadius: '0.5rem' }}>
        <Image
          src='https://iqonic.design/themes/socialv/vue/dist/img/profile-bg1.12dbfea2.jpg'
          style={{ width: '100%', top: '1rem', height: '18rem', borderRadius: '0.5rem' }}></Image>

        <img style={{ position: 'absolute', top: '12rem'}} alt="profile-img" className="profile-img" src="/media/users/avatar.jpg" />
        {loading?<></>:
          <h style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#37474F'}}>{data.fullName.toUpperCase()}</h>
        }
      </Row>
    </Container>
  )
}