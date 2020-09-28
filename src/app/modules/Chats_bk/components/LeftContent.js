import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {formatDistanceToNowStrict} from 'date-fns';
import {vi} from 'date-fns/locale';

import {List} from 'antd';

import SearchBar from './SearchBar';

import * as actions from '../_redux/chatActions';

import {textAbstract} from '../../../../utils/helper';

const LeftContent = props => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {user} = useSelector(state => state.auth);
  const currentUser = user;

  const {currentState} = useSelector(state => ({currentState: state.chats}), shallowEqual);

  const {conversations} = currentState;

  /*  const loadMoreMessageList = () => {
    console.log('VAODAY loadMoreMessageList');

    let gskip = 0;
    let pskip = 0;
    conversations.forEach(message => {
      if (message.conversationType === 'User') pskip += 1;
      if (message.conversationType === 'ChatGroup') gskip += 1;
    });
    dispatch(actions.fetchConversations({gskip, pskip}));
  };
 */
  useEffect(() => {
    let gskip = 0;
    let pskip = 0;
    dispatch(actions.fetchConversations({gskip, pskip}));

    return () => {};
  }, [dispatch]);

  return (
    <>
      <SearchBar />

      <div className="scroll-y mt-1">
        {/* <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          useWindow={false}
          loadMore={loadMoreMessageList}
          // hasMore={!messageListLoading && hasMoreMessageList}
        >
          <List
            itemLayout="horizontal"
            dataSource={conversations}
            renderItem={item => (
              <Link to={`/chat/${item.id}`}>
                <List.Item>
                  <ItemConversation />
                </List.Item>
              </Link>
            )}
          />
        </InfiniteScroll> */}
        {conversations &&
          conversations.map((item, index) => {
            if (item) {
              let user = null;

              let link_user_group = '';

              if (item.conversationType === 'ChatGroup') {
                user = item.chatGroup;
                link_user_group = user.id;
              } else {
                user = item.sender.id === currentUser.id ? item.receiver : item.sender;
                link_user_group = user.username;
              }

              if (user) {
                return (
                  <Link to={item.conversationType === 'ChatGroup' ? `/chat/${user.id}` : `/chat/${user.username}`} key={index}>
                    <List.Item
                      style={{
                        backgroundColor: user.id === id ? '#e6f7ff' : '#fff',
                        cursor: 'pointer',
                        borderRadius: '0.8rem',
                      }}>
                      <div className="d-flex flex-grow-1 align-items-center justify-content-between mb-5">
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50 mr-3">
                            <img alt="Pic" src="/media/users/blank.png" />
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">
                              {item.conversationType === 'ChatGroup'
                                ? textAbstract(item.chatGroup.name, 20)
                                : textAbstract(user.fullName, 20)}
                            </span>
                            <span className="text-muted font-weight-bold font-size-sm">
                              {item.type === 'text' || item.type === 'notification'
                                ? item.message
                                  ? item.message
                                  : ''
                                : item.type === 'image'
                                ? `Photo(s)`
                                : item.type === 'file'
                                ? `File(s)`
                                : null}
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span className="text-muted font-weight-bold font-size-sm">
                            {item.updatedAt
                              ? formatDistanceToNowStrict(new Date(item.updatedAt), {
                                  addSuffix: false,
                                  locale: vi,
                                })
                              : ''}
                          </span>
                        </div>
                      </div>
                    </List.Item>
                  </Link>
                );
              } else {
                return <></>;
              }
            } else {
              return <></>;
            }
          })}
      </div>
    </>
  );
};

export default LeftContent;
