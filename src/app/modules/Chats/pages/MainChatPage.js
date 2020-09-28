/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import 'emoji-mart/css/emoji-mart.css';

import ChatContent from '../components/ChatContent';

import ChatSidebar from '../components/ChatSidebar';

import {Layout, Row, Result} from 'antd';
import * as actions from '../_redux/chatActions';

const NewsPage = props => {
  const dispatch = useDispatch();

  const {currentState} = useSelector(state => ({currentState: state.chats}), shallowEqual);
  const {conversation} = currentState;

  const {id} = useParams();

  useEffect(() => {
    let gskip = 0;
    let pskip = 0;
    dispatch(actions.fetchConversations({gskip, pskip}));

    return () => {};
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.fetchConversation(id));

    return () => {};
  }, [dispatch, id]);

  return (
    <Layout style={{height: 'calc(100vh - 95px)', backgroundColor: '#fff'}}>
      <ChatSidebar />

      {conversation ? (
        <div className="d-flex flex-grow-1 scroll-y">
          <ChatContent />
        </div>
      ) : (
        <Row type="flex" align="middle" justify="center" className="px-3 bg-white d-flex flex-grow-1">
          <Result icon={<img width="300" src="/media/logos/smartcity_w.svg" />} title="Welcome to TD Chat" subTitle="___" />
        </Row>
      )}
    </Layout>
  );
};

export default NewsPage;
