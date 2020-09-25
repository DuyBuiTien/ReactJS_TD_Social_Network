import React, {useEffect, useMemo, useState} from 'react';
import "./Friends.scss"
import { useHistory } from "react-router-dom"

export const FriendsItem = props => {
  const history = useHistory()
  const {data, TuChoiKetBan, DongYKetBan, TroChuyen, type, KetBan} = props;
  return (
    <div className="col-xl-4">
      {/*begin::Card*/}
      <div className="card card-custom gutter-b card-stretch friend-item">
        {/*begin::Body*/}
        <div className="card-body pt-4 d-flex flex-column justify-content-between">
          {/*begin::Toolbar*/}

          {/*end::Toolbar*/}
          {/*begin::User*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Pic*/}
            <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
              <div className="symbol symbol-lg-75">
                <img alt="profile-img" className="profile-img" src="/media/users/avatar.jpg" />
              </div>
            </div>
            {/*end::Pic*/}
            {/*begin::Title*/}
            <div className="d-flex flex-column">
              <span className="text-hover-primary font-size-h4 mb-0" onClick={() => history.push(`/profile/${data.username}`)} style={{color: '#385898', cursor: 'pointer'}}>{data?.fullName ?? ''}</span>
              <span className="text-muted">{data.position?.name ?? ''}</span>
              <span className="text-muted">{data.office?.name ?? ''}</span>
            </div>
            {/*end::Title*/}
          </div>
          {/*end::User*/}
          {/*begin::Desc*/}

          {/*end::Desc*/}

          <div className="mt-2">
            {type === "contact"?
              <span
                className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                onClick={() => TroChuyen(data)}>
                Trò chuyện
              </span>
              :<></>
            }
            {type === "notContact"?
              <span
                className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                onClick={() => KetBan(data)}>
                Kết bạn
              </span>
              :<></>
            }
            {type === "contact"?
              <span
              className="btn btn-sm btn-danger font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
              onClick={() => TuChoiKetBan(data)}>
              Hủy kết bạn
            </span>
              :<></>
            }
            {type === "request"?
              <span
              className="btn btn-sm btn-danger font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
              onClick={() => TuChoiKetBan(data)}>
              Từ chối kết bạn
            </span>
              :<></>
            }
            {type === "requestsent"?
              <span
              className="btn btn-sm btn-info font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
              >
              Đã gửi lời mời kết bạn
            </span>
              :<></>
            }
            {type === "request"?
              <span
                className="btn btn-sm btn-success font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                onClick={() => DongYKetBan(data)}>
                Đồng ý kết bạn
              </span>
              :<></>
            }
            
          </div>
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Card*/}
    </div>
  );
};