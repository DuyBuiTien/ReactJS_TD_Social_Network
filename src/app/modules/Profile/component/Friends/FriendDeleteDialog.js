/* eslint-disable no-restricted-imports */
import React, {useEffect, useMemo, useState} from 'react';
import {Modal} from 'react-bootstrap';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {ModalProgressBar} from '../../../../../_metronic/_partials/controls';

export function FriendDeleteDialog({show, handleClose, HuyKetBan}) {
  const {isLoading} = useSelector(state => ({isLoading: state.friends.actionsLoading}), shallowEqual);

  console.log('show' + show)

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Hủy kết bạn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && <span>Bạn có muốn hủy kết bạn với người dùng này?</span>}
        {isLoading && <span>Đang hủy kết bạn...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button type="button" onClick={handleClose} className="btn btn-light btn-elevate">
            Hủy
          </button>
          <> </>
          <button type="button" onClick={HuyKetBan} className="btn btn-delete btn-elevate">
            Đồng ý
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
