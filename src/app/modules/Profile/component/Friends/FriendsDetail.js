import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { Redirect, Switch, Route, Link, NavLink } from 'react-router-dom';

import Friends from './Friends';
import FriendsSearch from './FriendsSearch';

export const FriendsDetail = (props) => {
  return (
    <Container>
      <Row style={{ width: '100%', padding: '0px' }}>
        <Col>
          <Card style={{padding: '0px', width: '100%'}}>
            <Card.Header as="h1">Friends</Card.Header>
            <Nav fill variant="pills" defaultActiveKey="/profile/friends/contact">
              <Nav.Item >
                <Nav.Link style={{ borderBottomColor: '#999999', borderBottomWidth: '1px', margin: '1rem' }}>
                  <NavLink to="/profile/friends/contact">Tất cả bạn bè</NavLink>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link style={{ borderBottomColor: '#999999', borderBottomWidth: '1px', margin: '1rem' }}>
                  <NavLink to="/profile/friends/request">Lời mời kết bạn</NavLink>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link style={{ borderBottomColor: '#999999', borderBottomWidth: '1px', margin: '1rem' }}>
                  <NavLink to="/profile/friends/requestsent">Danh sách chờ kết bạn</NavLink>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link style={{ borderBottomColor: '#999999', borderBottomWidth: '1px', margin: '1rem' }}>
                  <NavLink to="/profile/friends/search">Tìm kiếm bạn bè </NavLink>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Switch>
              <Redirect from={`/profile/${props.data.username}`} exact={true} to="/profile/friends/contact" />
              <Route path="/profile/friends/contact">
                <Friends type={'contact'} />
              </Route>
              <Route path="/profile/friends/request">
                <Friends type={'request'} />
              </Route>
              <Route path="/profile/friends/requestsent">
                <Friends type={'requestsent'} />
              </Route>

              <Route path="/friends/search" >
                <FriendsSearch />
              </Route>
            </Switch>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}