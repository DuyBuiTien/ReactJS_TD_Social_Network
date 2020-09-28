import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

import PostItem from '../../Newsfeed/components/PostItem';

import { requestGET, GLOBAL_URL } from '../../../basic/basicApi'

export const GroupDetail = props => {
  const { user } = useSelector(state => state.auth);
  const location = useLocation();

  const [loadMore, setLoadMore] = useState(true);

  //const [data, setData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById('list');
    if (props.scrollable) {
      // list has fixed height
      list.addEventListener('scroll', e => {
        const el = e.target;
        if (el.scrollTop + el.clientHeight === el.scrollHeight) {
          setLoadMore(true);
        }
      });
    } else {
      // list has auto height
      window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
          setLoadMore(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    const list = document.getElementById('list');

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [props.state]);

  const getData = async load => {
    if (load) {
      var data = await requestGET(`${GLOBAL_URL}/v1/post/GetListPostInGroup?groupId=${Number(location.pathname.split("/").pop())}&page=0&perpage=20`);
      setData(data.data)
    }
  };

  return (
    <>
      <div id="list">
        {data.map((item, i) => (
          <PostItem key={i} itemData={item} load = {loadMore} setLoad = {setLoadMore} />
        ))}
      </div>
    </>
  );
};
