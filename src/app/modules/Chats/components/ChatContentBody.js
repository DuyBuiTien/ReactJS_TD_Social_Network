import React, {useEffect, useState, useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import {Link, useParams} from 'react-router-dom';
import {formatDistanceToNowStrict} from 'date-fns';
import {vi} from 'date-fns/locale';

import * as actions from '../_redux/chatActions';

import MessageList from './MessageList';

const ChatContentBody = props => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {user} = useSelector(state => state.auth);
  const currentUser = user;
  const {currentState} = useSelector(state => ({currentState: state.chats}), shallowEqual);
  const {conversation, actionsLoading, hasMoreConversation} = currentState;
  const messages = conversation?.messages ?? [];

  const MessageListTMP = messages => {
    return messages.map((chat, index) => {
      if (chat.type === 'text' && chat.senderId === currentUser.id) {
        return (
          <div className="d-flex flex-column mb-5 align-items-end" key={index}>
            <div className="d-flex align-items-center">
              <div>
                <span className="text-muted font-size-sm">
                  {chat.updatedAt
                    ? formatDistanceToNowStrict(new Date(chat.updatedAt), {
                        addSuffix: false,
                        locale: vi,
                      })
                    : ''}
                </span>
                <span href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6 ml-1"></span>
              </div>
            </div>
            <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
              {chat.message}
            </div>
          </div>
        );
      } else if (chat.type === 'text' && chat.senderId !== currentUser.id) {
        return (
          <div className="d-flex flex-column mb-5 align-items-start" key={index}>
            <div className="d-flex align-items-center">
              <div>
                <span href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6 mr-1">
                  {chat.sender.fullName}
                </span>
                <span className="text-muted font-size-sm">
                  {chat.updatedAt
                    ? formatDistanceToNowStrict(new Date(chat.updatedAt), {
                        addSuffix: false,
                        locale: vi,
                      })
                    : ''}
                </span>
              </div>
            </div>
            <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
              {chat.message}
            </div>
          </div>
        );
      }
      return <></>;
    });
  };

  const handleInfiniteOnLoad = () => {
    if (conversation) {
      let id = conversation.conversationType === 'User' ? conversation.receiver.username : conversation.receiver.id;

      dispatch(actions.fetchConversation(id, messages.length));
    }
  };

  return (
    <InfiniteScroll
      className="card-body d-flex flex-grow-1 scroll-y flex-column"
      initialLoad={false}
      pageStart={0}
      loadMore={handleInfiniteOnLoad}
      hasMore={!actionsLoading && hasMoreConversation}
      useWindow={false}
      isReverse={true}>
      {MessageListTMP(messages)}
    </InfiniteScroll>
  );
};

export default ChatContentBody;
