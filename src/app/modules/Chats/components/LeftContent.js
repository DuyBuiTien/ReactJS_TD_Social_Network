import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {formatDistanceToNowStrict} from 'date-fns';
import {vi} from 'date-fns/locale';

import {List, Layout, Button, Input, Tooltip} from 'antd';

import {Search as SearchIcon, Edit} from 'react-feather';

import {textAbstract} from '../../../../utils/helper';

const {Header} = Layout;

const LeftContent = props => {
  const {id} = useParams();
  const {user} = useSelector(state => state.auth);
  const currentUser = user;

  const {currentState} = useSelector(state => ({currentState: state.chats}), shallowEqual);

  const {conversations} = currentState;
  const [modalCreateGroupChatVisible, setModalCreateGroupChatVisible] = useState(false);

  return (
    <>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.3rem 0rem',
          zIndex: '1',
          boxShadow: '0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02)',
          height: 'auto',
          lineHeight: 'auto',
          backgroundColor: '#fff',
        }}>
        <Input
          //ref={inputMessageRef}
          placeholder="Tìm kiếm..."
          //value={inputdemo}
          //value={inputMessage?.text ?? ''}
          onChange={e => {
            //setInputdemo(e.target.value);
          }}
          className="form-control  p-2 m-2"
          style={{flex: 1}}
          //onPressEnter={handleSendClick}
          onKeyUp={() => {
            /* if (!typing) {
              setTyping(true);
              if (inputMessage && inputMessage.text.trim() !== '') {
              }
            }
            delay(() => {
              setTyping(false);
            }, 1000); */
          }}
        />
        <span className="mr-auto" />
        <div>
          <Tooltip title="Tạo nhóm trò chuyện">
            <Button
              shape="circle"
              style={{border: '0'}}
              onClick={() => setModalCreateGroupChatVisible(!modalCreateGroupChatVisible)}>
              <Edit size={16} />
            </Button>
          </Tooltip>
        </div>
      </Header>

      <div className="scroll-y mt-1">
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
                  <Link
                    to={item.conversationType === 'ChatGroup' ? `/chat/${user.id}` : `/chat/${user.username}`}
                    key={`${user.username + index}`}>
                    <List.Item
                      style={{
                        backgroundColor: user.id === id ? '#e6f7ff' : '#fff',
                        cursor: 'pointer',
                        borderRadius: '0.8rem',
                      }}
                      key={`${user.username + index}AA`}>
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
