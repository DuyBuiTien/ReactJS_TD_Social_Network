/* eslint-disable no-restricted-imports */
import React from 'react';
import {Tabs, Tab, Row, Col, Nav} from 'react-bootstrap';
import {Redirect, Switch, Route, Link, NavLink} from 'react-router-dom';

import Friends from '../components/Friends';
import FriendsSearch from '../components/FriendsSearch';

export default function NewsPage() {
  return (
    <div className="card card-custom overflow-hidden position-relative mb-8">
      <div className="position-relative px-20">
        <Nav className="nav nav-tabs nav-tabs-line" defaultActiveKey="/friends/contact">
          <Nav.Item className="nav-item mr-14 mt-4">
            <NavLink className=" nav-link font-size-h5 border-2 pb-6 mx-0" to="/friends/contact">
              Tất cả bạn bè
            </NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item mr-14 mt-4">
            <NavLink className=" nav-link font-size-h5 border-2 pb-6 mx-0" to="/friends/request">
              Lời mời kết bạn
            </NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item mr-14 mt-4">
            <NavLink className=" nav-link font-size-h5 border-2 pb-6 mx-0" to="/friends/requestsent">
              Danh sách chờ kết bạn
            </NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item mr-14 mt-4">
            <NavLink className=" nav-link font-size-h5 border-2 pb-6 mx-0" to="/friends/search">
              Tìm kiếm bạn bè
            </NavLink>
          </Nav.Item>
        </Nav>

        <Switch>
          <Redirect from="/friends" exact={true} to="/friends/contact" />
          <Route path="/friends/contact">
            <Friends type={'contact'} />
          </Route>
          <Route path="/friends/request">
            <Friends type={'request'} />
          </Route>
          <Route path="/friends/requestsent">
            <Friends type={'requestsent'} />
          </Route>

          <Route path="/friends/search" >
            <FriendsSearch />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
