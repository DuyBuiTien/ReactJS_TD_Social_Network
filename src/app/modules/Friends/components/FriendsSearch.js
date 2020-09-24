import React, {useEffect, useMemo, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as actions from '../_redux/friendsActions';
import {FriendDeleteDialog} from './FriendDeleteDialog';
import "./Friends.scss"
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom"

import {FriendsItem} from './FriendsItem'


const Friends = props => {

  const history = useHistory()

  const [show, setShow] = useState(false);
  const [key, setKey] = useState('');

  const [idContact, setIdContact] = useState(null);
  const [nameContact, setNameContact] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {currentState} = useSelector(state => ({currentState: state.friends}), shallowEqual);

  const {entities} = currentState;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.startSearch());
  }, [dispatch]);

  const DongYKetBan = dataItem => {
    dispatch(actions.dongYKetBanS(dataItem.datacontact.id,dataItem.username))
  };

  const KetBan = dataItem => {
    dispatch(actions.KetBan(dataItem.datacontact.id,dataItem.username))
  };

  const TroChuyen = dataItem => {
    history.push(`/chat/${dataItem.username}`)
  };

  const HuyKetBan = () => {
    dispatch(actions.huyKetBanS(idContact, nameContact, handleClose))
  };

  const TuChoiKetBan = dataItem => {
    console.log(dataItem);
    if (dataItem.datacontact && dataItem.datacontact.id) {
      setIdContact(dataItem.datacontact.id);
      setNameContact(dataItem.username);
    }
    handleShow();
  };

  const searchFriends = (key) => {
    dispatch(actions.fetchFriendsSearch(key))
  }

  return (
    <>
      <div className="card card-custom gutter-b">
        <div className="card-body">
          <div className="flex-row-lg-fluid">
            <Form style={{margin: 10}}>
                <Form.Group controlId="searchKey">
                    <Form.Control type="text" placeholder="Nhập từ khóa" value={key} onChange={(e) => setKey(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={() => searchFriends(key)}>
                    Tìm kiếm
                </Button>
            </Form>
            <div className="row">
              {entities &&
                entities.map((item, index) => (
                  <FriendsItem
                    data={item}
                    key={`friend_${index}`}
                    DongYKetBan={DongYKetBan}
                    TuChoiKetBan={TuChoiKetBan}
                    TroChuyen={TroChuyen}
                    KetBan={KetBan}
                    type={item.type}
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
