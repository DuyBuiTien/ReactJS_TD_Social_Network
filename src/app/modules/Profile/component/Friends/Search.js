import React, {useEffect, useMemo} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as actions from '../_redux/friendsActions';

const FriendsItem = props => {
  return (
    <div className="col-xl-4">
      {/*begin::Card*/}
      <div className="card card-custom gutter-b card-stretch">
        {/*begin::Body*/}
        <div className="card-body pt-4 d-flex flex-column justify-content-between">
          {/*begin::Toolbar*/}

          {/*end::Toolbar*/}
          {/*begin::User*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Pic*/}
            <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
              <div className="symbol symbol-lg-75">
                <img alt="Pic" src="/media/users/300_1.jpg" />
              </div>
              <div className="symbol symbol-lg-75 symbol-primary d-none">
                <span className="font-size-h3 font-weight-boldest">JM</span>
              </div>
            </div>
            {/*end::Pic*/}
            {/*begin::Title*/}
            <div className="d-flex flex-column">
              <span className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">Luca Doncic</span>
              <span className="text-muted font-weight-bold">Head of Development</span>
            </div>
            {/*end::Title*/}
          </div>
          {/*end::User*/}
          {/*begin::Desc*/}

          {/*end::Desc*/}
          {/*begin::Info*/}
          <div className="mb-7">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark-75 font-weight-bolder mr-2">Email:</span>
              <span className="text-muted text-hover-primary">luca@festudios.com</span>
            </div>
            <div className="d-flex justify-content-between align-items-cente my-1">
              <span className="text-dark-75 font-weight-bolder mr-2">Phone:</span>
              <span className="text-muted text-hover-primary">44(76)34254578</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark-75 font-weight-bolder mr-2">Location:</span>
              <span className="text-muted font-weight-bold">Barcelona</span>
            </div>
          </div>
          {/*end::Info*/}
          <span className="btn btn-block btn-sm btn-light-warning font-weight-bolder text-uppercase py-4">write message</span>
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Card*/}
    </div>
  );
};

const Friends = props => {
  const type = props?.type ?? '';

  console.log('type' + type);

  const {currentState} = useSelector(state => ({currentState: state.friends}), shallowEqual);

  console.log(currentState);

  //const {entities} = currentState;

  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    // server call by queryParams
    dispatch(actions.fetchFriends(type));
  }, [dispatch, type]);
  
  return (
    <div className="flex-row-lg-fluid">
      <div className="row">
        <FriendsItem />
      </div>
    </div>
  );
};

export default Friends;
