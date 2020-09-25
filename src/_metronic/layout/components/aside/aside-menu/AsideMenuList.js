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
              <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Earth.svg')} />
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
              <SVG src={toAbsoluteUrl('/media/svg/icons/General/User.svg')} />
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
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')} />
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
