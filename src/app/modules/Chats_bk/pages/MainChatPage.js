import React, {useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import {Input, Layout, Menu, Badge, Row, Button, Dropdown, Tooltip} from 'antd';

import SearchBar from '../components/SearchBar';
import ListConversation from '../components/ListConversation';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const {Sider, Header} = Layout;

const Topic = () => (
  <div>
    <h3>TOPIC</h3>
  </div>
);

const NewsPage = props => {
  const [heightChatAside, setHeightChatAside] = useState(null);

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <Layout style={{height: 'calc(100vh - 180px)', backgroundColor: '#fff'}}>
      <Layout style={{width: 350}}>
        <div
          style={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            backgroundColor: '#fff',
            height: '100%',
            borderRight: '1px solid rgba(0, 0, 0, 0.05)',
          }}>
          <div className="scroll-y bg-transparent">
            <InfiniteScroll initialLoad={false} pageStart={0} useWindow={false}>
              <div className="card card-custom">
                {/*begin::Body*/}
                <div className="card-body">
                  {/*begin:Search*/}
                  <SearchBar />
                  <ListConversation />

                  {/*end:Search*/}
                  {/*begin:Users*/}
                  {/* <div className="mt-7 scroll scroll-pull" style={{height: "100vh", overflowY: 'scroll'}} > */}

                  {/*end:Users*/}

                  {/*end::Body*/}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default NewsPage;
