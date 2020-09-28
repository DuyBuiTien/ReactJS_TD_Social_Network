import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {formatDistanceToNowStrict} from 'date-fns';
import {List} from 'antd';
import * as actions from '../_redux/chatActions';
import {textAbstract} from '../../../../utils/helper';

const ChatContentHeader = props => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {user} = useSelector(state => state.auth);
  const currentUser = user;

  const {currentState} = useSelector(state => ({currentState: state.chats}), shallowEqual);
  const {conversation} = currentState;

  return (
    <div className="card-header align-items-center px-4 py-3">
      <div className="text-left flex-grow-1"></div>
      <div className="text-center flex-grow-1">
        <div className="text-dark-75 font-weight-bold font-size-h5">
          {conversation
            ? conversation.conversationType === 'ChatGroup'
              ? conversation.receiver.name
              : conversation.receiver.fullName
            : ''}
        </div>
        <div>
          <span className="label label-sm label-dot label-success" />
          <span className="font-weight-bold text-muted font-size-sm">Active</span>
        </div>
      </div>
      <div className="text-right flex-grow-1">
        {/*begin::Dropdown Menu*/}
        <button
          type="button"
          className="btn btn-clean btn-sm btn-icon btn-icon-md"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <i className="ki ki-bold-more-hor icon-md"></i>
        </button>
        {/*end::Dropdown Menu*/}
      </div>
    </div>
  );
};

export default ChatContentHeader;
