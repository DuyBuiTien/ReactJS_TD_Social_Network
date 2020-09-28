import React from 'react';

import ChatContent from '../components/ChatContent';
import LeftContent from '../components/LeftContent';

import ChatSidebar from '../components/ChatSidebar';

import {Input, Layout, Menu, Badge, Row, Button, Dropdown, Tooltip} from 'antd';
const {Sider, Header} = Layout;

const NewsPage = props => {
  return (
    <Layout style={{height: 'calc(100vh - 95px)', backgroundColor: '#fff'}}>
      <ChatSidebar />
      <div className="d-flex flex-grow-1 scroll-y">
        <ChatContent />
      </div>
    </Layout>
  );
};

export default NewsPage;
