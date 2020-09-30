import React, {useEffect, useMemo, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as actions from '../../../Friends/_redux/friendsActions';
import {FriendDeleteDialog} from './FriendDeleteDialog';
import "./Friends.scss"
import { useHistory } from "react-router-dom"

import {FriendsItem} from './FriendsItem'


const Friends = props => {
  const type = props?.type ?? '';

  const history = useHistory()

  const [show, setShow] = useState(false);

  const [idContact, setIdContact] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {currentState} = useSelector(state => ({currentState: state.friends}), shallowEqual);

  const {entities} = currentState;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchFriends(type));
  }, [dispatch, type]);

  const DongYKetBan = dataItem => {
    dispatch(actions.dongYKetBan(dataItem.datacontact.id))
  };

  const TroChuyen = dataItem => {
    history.push(`/chat/${dataItem.username}`)
  };

  const HuyKetBan = () => {
    dispatch(actions.huyKetBan(idContact, handleClose))
  };

  const TuChoiKetBan = dataItem => {
    console.log(dataItem);
    if (dataItem.datacontact && dataItem.datacontact.id) {
      setIdContact(dataItem.datacontact.id);
    }
    handleShow();
  };

  return (
    <>
      <div className="card card-custom gutter-b">
        <div className="card-body">
          <div className="flex-row-lg-fluid">
            <div className="row">
              {entities &&
                entities.map((item, index) => (
                  <FriendsItem
                    data={item}
                    key={`friend_${index}`}
                    DongYKetBan={DongYKetBan}
                    TuChoiKetBan={TuChoiKetBan}
                    TroChuyen={TroChuyen}
                    type={type}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <FriendDeleteDialog show={show} handleClose={handleClose} HuyKetBan={HuyKetBan} />
    </>
  );
};

export default Friends;
