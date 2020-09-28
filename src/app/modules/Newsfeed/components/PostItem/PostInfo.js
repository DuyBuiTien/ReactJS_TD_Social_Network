import React from 'react';
import {NavLink} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import {formatDistanceToNowStrict} from 'date-fns';
import {vi} from 'date-fns/locale';

const PostInfo = props => {
  const {data} = props;
  console.log('data');
  console.log(data);
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="symbol symbol-40 symbol-circle symbol-light-success mr-2">
        <div
          className="symbol-label"
          style={{backgroundImage: `url("https://s1.cdn.becuame.com/small/${data.user.avatarUrl}")`}}
        />
      </div>

      <div className="d-flex flex-column flex-grow-1">
        <span>
          <NavLink
            className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder"
            to={`/u/${data.user.username}`}>
            {data.user.displayName}
          </NavLink>{' '}
          đăng trong nhóm <NavLink to={`/groups/${data.group.id}`}>{data.group.name}</NavLink>
        </span>
        <span className="text-muted">
          {data.updatedAt
            ? formatDistanceToNowStrict(new Date(data.updatedAt), {
                addSuffix: false,
                locale: vi,
              })
            : ''}{' '}
          <i className="fas fa-globe-asia" title="Công khai" />
        </span>
      </div>

      <Dropdown className="dropdown-inline" alignRight>
        <Dropdown.Toggle id="dropdown-toggle-top" as={DropdownCustomToggler}>
          <i className="ki ki-bold-more-hor" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <ul className="navi navi-hover">
            <li className="navi-header">
              <a className="navi-link">
                <span className="navi-icon">
                  <i className="flaticon-notes" />
                </span>
                <span className="navi-text">Theo dõi bài viết</span>
              </a>
            </li>
            {/* <li className="navi-separator mb-0 opacity-70" />
            <li className="navi-item">
              <a className="navi-link">
                <span className="navi-icon">
                  <i className="flaticon-interface-10" />
                </span>
                <span className="navi-text">Lưu bài viết</span>
              </a>
            </li>
            <li className="navi-item">
              <a className="navi-link">
                <span className="navi-icon">
                  <i className="flaticon-warning" />
                </span>
                <span className="navi-text">Ẩn bài viết</span>
              </a>
            </li>
            <li className="navi-item">
              <a className="navi-link">
                <span className="navi-icon">
                  <i className="flaticon2-list-3" />
                </span>
                <span className="navi-text">Copy link</span>
              </a>
            </li>
            <li className="navi-separator mb-0 opacity-70" />
            <li className="navi-footer">
              <a className="navi-link">
                <span className="navi-icon">
                  <i className="flaticon-cancel" />
                </span>
                <span className="navi-text">Xóa bài viết</span>
              </a>
            </li> */}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const DropdownCustomToggler = React.forwardRef((props, ref) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      ref={ref}
      className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}>
      {props.children}
    </a>
  );
});

export default PostInfo;
