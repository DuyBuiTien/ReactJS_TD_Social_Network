/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React from 'react';
import SVG from 'react-inlinesvg';
import {useSelector} from 'react-redux';

import {useHistory} from 'react-router-dom';
import {toAbsoluteUrl, toAbsoluteAvatarUrl} from '../../../../_helpers';

export function QuickUser() {
  const {user} = useSelector(state => state.auth);
  const history = useHistory();

  const logoutClick = () => {
    const toggle = document.getElementById('kt_quick_user_toggle');
    if (toggle) {
      toggle.click();
    }
    history.push('/logout');
  };

  return (
    <div id="kt_quick_user" className="offcanvas offcanvas-right offcanvas p-10">
      <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 className="font-weight-bold m-0">
          Tài khoản
          <small className="text-muted font-size-sm ml-2"></small>
        </h3>
        <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
          <i className="ki ki-close icon-xs text-muted" />
        </a>
      </div>

      <div className="offcanvas-content pr-5 mr-n5">
        <div className="d-flex align-items-center mt-5">
          <div className="symbol symbol-100 mr-5">
            <div
              className="symbol-label"
              style={{
                backgroundImage: `url(${toAbsoluteAvatarUrl(user.avatarUrl)})`,
              }}
            />
            <i className="symbol-badge bg-success" />
          </div>
          <div className="d-flex flex-column">
            <a href="#" className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">
              {user.fullName}
            </a>
            <div className="text-muted mt-1">{user.position?.name ?? ''}</div>
            <div className="navi mt-2">
              <a href="#" className="navi-item">
                <span className="navi-link p-0 pb-2">
                  <span className="navi-icon mr-1">
                    <span className="svg-icon-lg svg-icon-primary">
                      <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Mail-notification.svg')}></SVG>
                    </span>
                  </span>
                  <span className="navi-text text-muted text-hover-primary">{user.email}</span>
                </span>
              </a>
            </div>
            {/* <Link to="/logout" className="btn btn-light-primary btn-bold">
                Sign Out
              </Link> */}
            <button className="btn btn-light-primary btn-bold" onClick={logoutClick}>
              Đăng xuất
            </button>
          </div>
        </div>

        <div className="separator separator-dashed mt-8 mb-5" />

        <div className="navi navi-spacer-x-0 p-0">
          <a href="/user/profile" className="navi-item">
            <div className="navi-link">
              <div className="symbol symbol-40 bg-light mr-3">
                <div className="symbol-label">
                  <span className="svg-icon svg-icon-md svg-icon-success">
                    <SVG src={toAbsoluteUrl('/media/svg/icons/General/Notification2.svg')}></SVG>
                  </span>
                </div>
              </div>
              <div className="navi-text">
                <div className="font-weight-bold">Tài khoản</div>
                <div className="text-muted">Thông tin tài khoản</div>
              </div>
            </div>
          </a>

          <a href="/user/profile" className="navi-item">
            <div className="navi-link">
              <div className="symbol symbol-40 bg-light mr-3">
                <div className="symbol-label">
                  <span className="svg-icon svg-icon-md svg-icon-warning">
                    <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Image.svg')}></SVG>
                  </span>
                </div>
              </div>
              <div className="navi-text">
                <div className="font-weight-bold">Thay đổi hình đại diện</div>
                <div className="text-muted">Thanh đổi ảnh đại diện của bạn bằng hình ảnh khác</div>
              </div>
            </div>
          </a>

          <a href="/user/profile" className="navi-item">
            <div className="navi-link">
              <div className="symbol symbol-40 bg-light mr-3">
                <div className="symbol-label">
                  <span className="svg-icon svg-icon-md svg-icon-danger">
                    <SVG src={toAbsoluteUrl('/media/svg/icons/Files/Selected-file.svg')}></SVG>
                  </span>
                </div>
              </div>
              <div className="navi-text">
                <div className="font-weight-bold">Nhật ký hoạt động</div>
                <div className="text-muted">Nhật ký truy cập và các hoạt động của tôi</div>
              </div>
            </div>
          </a>
        </div>

        <div className="separator separator-dashed my-7"></div>
      </div>
    </div>
  );
}
