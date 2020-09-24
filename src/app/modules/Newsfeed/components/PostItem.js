import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {PostInfo, PostContent, PostStatus, PostComment, Comment} from './PostItem/index';

const PostItem = props => {
  const {itemData} = props;
  const {user} = useSelector(state => state.auth);
  return (
    <div className="card card-custom gutter-b feed-item">
      <div className="card-body">
        <PostInfo data={itemData} />
        <PostContent data={itemData} />

        <div className="separator separator-solid mt-2 mb-4" />

        <PostStatus data={itemData} load= {props.load} setLoad = {props.setLoad} />

        <div className="separator separator-solid mt-2 mb-4" />

        <PostComment data={itemData} load= {props.load} setLoad = {props.setLoad}/>

        <Comment data={itemData} setLoad = {props.setLoad} />
      </div>
      {/*end::Body*/}
    </div>
  );
};

export default PostItem;
