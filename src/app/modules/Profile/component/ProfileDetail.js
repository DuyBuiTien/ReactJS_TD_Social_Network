import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Image, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

import { requestGET, GLOBAL_URL } from '../../../basic/basicApi';
import { toAbsoluteUrl, checkIsActive } from '../../../../_metronic/_helpers';
import {TimelineDetail} from './Detail/TimelineDetail';
import {AboutDetail} from './About/AboutDetail'

export const ProfileDetail = () => {
  const { user } = useSelector(state => state.auth);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("timeline");
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
      <Row style={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '25rem', backgroundColor: '#ffff', borderRadius: '0.5rem' }}>
        <Image
          src={toAbsoluteUrl('/media/svg/shapes/abstract-9.svg')}
          style={{ width: '100%', top: '1rem', height: '18rem', borderRadius: '0.5rem' }}></Image>

        <img style={{ position: 'absolute', top: '12rem'}} alt="profile-img" className="profile-img" src="/media/users/avatar.jpg" />
        {loading?<></>:
          <h style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#37474F'}}>{data.fullName.toUpperCase()}</h>
        }
      </Row>

      <Row fluid style={{marginTop: '2rem'}}>
        <Nav fill variant="pills" defaultActiveKey="timeline" style={{width: '100%', backgroundColor: '#fff', height: '5rem'}}>
          <Nav.Item>
            <Nav.Link style={{ height: '5rem' }} onSelect={() => setSelected("timeline")} eventKey="timeline">Timeline</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ height: '5rem' }} onSelect={() => setSelected("about")} eventKey="about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ height: '5rem' }} onSelect={() => setSelected("friends")} eventKey="friends">Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ height: '5rem' }} onSelect={() => setSelected("photos")} eventKey="photos">Photos</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <Row style={{marginTop: '2rem'}}>
        {
          selected === "timeline" && <TimelineDetail/> ||
          selected === "about" && <AboutDetail/>
        }
      </Row>
    </Container>
  )
}