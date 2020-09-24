/* eslint-disable no-restricted-imports */
import React from 'react';

import NewPost from '../components/NewPost';
import ListPost from '../components/ListPost';
import { Card } from 'react-bootstrap';

export default function NewsPage() {
  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <NewPost />
          <ListPost />
        </div>
        <div className="col-lg-4">
          <Card border="light">
            <Card.Header style={{padding: 10}}><h5>Sinh nhật sắp tới</h5></Card.Header>
            <Card.Body style={{padding: 10}}>
              <div className="d-flex align-items-center mb-7">
              {/*begin::Pic*/}
              <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                <div className="symbol symbol-lg-75">
                  <img alt="profile-img" className="profile-img" src="/media/users/avatar.jpg" />
                </div>
              </div>
              {/*end::Pic*/}
              {/*begin::Title*/}
              <div className="d-flex flex-column">
                <span className="text-hover-primary font-size-h4 mb-0" style={{color: '#385898', cursor: 'pointer'}}>Quản trị sở TTTT</span>
                <span className="text-muted">Hôm nay</span>
              </div>
              {/*end::Title*/}
            </div>
            <div className="d-flex align-items-center mb-7">
              {/*begin::Pic*/}
              <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                <div className="symbol symbol-lg-75">
                  <img alt="profile-img" className="profile-img" src="/media/users/avatar.jpg" />
                </div>
              </div>
              {/*end::Pic*/}
              {/*begin::Title*/}
              <div className="d-flex flex-column">
                <span className="text-hover-primary font-size-h4 mb-0" style={{color: '#385898', cursor: 'pointer'}}>Quản trị hệ thống</span>
                <span className="text-muted">Ngày mai</span>
              </div>
              {/*end::Title*/}
            </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
