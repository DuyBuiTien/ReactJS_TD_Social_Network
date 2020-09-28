import React from 'react';

import ChatContent from '../components/ChatContent';
import LeftContent from '../components/LeftContent';

import {Input, Layout, Menu, Badge, Row, Button, Dropdown, Tooltip} from 'antd';
const {Sider, Header} = Layout;

const ChatSidebar = props => {
  return (
    <Sider width={'300'}>
      <div
        className="d-flex flex-column p-3"
        style={{height: '100%', backgroundColor: '#fff', borderRight: '1px solid rgba(0, 0, 0, 0.05)'}}>
        <LeftContent />
      </div>
    </Sider>
  );
};

export default ChatSidebar;
