import React, {useEffect, useState, useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {formatDistanceToNowStrict} from 'date-fns';
import {List} from 'antd';
import * as actions from '../_redux/chatActions';

import ChatContentHeader from './ChatContentHeader';
import ChatContentFooter from './ChatContentFooter';
import ChatContentBody from './ChatContentBody';
import ChatStyled from './chat';

const ChatContent = props => {
  const scrollRef = useRef();

  const dispatch = useDispatch();
  const {id} = useParams();
  const {user} = useSelector(state => state.auth);
  const currentUser = user;

  const {currentState} = useSelector(state => ({currentState: state.chats}), shallowEqual);

  const {conversation, actionsLoading, hasMoreConversation} = currentState;
  const messages = conversation?.messages ?? [];

  const isScrollToBottom = currentState?.scrollToBottom ?? null;

  const scrollToBottom = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  if (isScrollToBottom) {
    scrollToBottom();
    dispatch(actions.doToggleScrollToBottom());
  }

  useEffect(() => {
    let skip = 0;
    let limit = 20;
    dispatch(actions.fetchConversation(id, skip, limit));

    return () => {};
  }, [dispatch, id]);

  useEffect(() => {
    scrollToBottom();
  }, [id]);

  return (
    <div className="card card-custom flex-grow-1">
      <ChatContentHeader />
      <ChatStyled ref={scrollRef} className="scroll-y">
        <ChatContentBody messages={messages} />
      </ChatStyled>
      <ChatContentFooter />
    </div>
  );
};

export default ChatContent;
