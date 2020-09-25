/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import {useLocation} from 'react-router';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import SVG from 'react-inlinesvg';
import {FormattedMessage, injectIntl} from 'react-intl';

import {toAbsoluteUrl, checkIsActive} from '../../../../_helpers';

function AsideMenuList({layoutProps}) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url) ? ` ${!hasSubmenu && 'menu-item-active'} menu-item-open ` : '';
  };

  const {user} = useSelector(state => state.auth);
  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*
        <li className={`menu-item ${getMenuItemActive('/dashboard', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Layout/Layout-top-panel-2.svg')} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
       */}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/newsfeed', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/newsfeed">
            <span className="svg-icon menu-icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-newspaper"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
                />
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
              </svg>
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.NEWSFEED" />
            </span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive(`/profile/${user.username}`, false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to={`/profile/${user.username}`}>
            <span className="svg-icon menu-icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.PROFILE" />
            </span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/friends', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/friends">
            <span className="svg-icon menu-icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-people"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                />
              </svg>
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.FRIENDS" />
            </span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/groups', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/groups">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')} />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.GROUPS" />
            </span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/chat', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/chat">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group-chat.svg')} />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.CHAT" />
            </span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li className={`menu-item ${getMenuItemActive('/events', false)}`} aria-haspopup="true">
          <NavLink className="menu-link" to="/events">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl('/media/svg/icons/General/Notification2.svg')} />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.EVENTS" />
            </span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}

export default injectIntl(AsideMenuList);
