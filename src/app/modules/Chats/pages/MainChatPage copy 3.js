import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import {Input, Layout, Menu, Badge, Row, Button, Dropdown, Tooltip} from 'antd';

import SearchBar from '../components/SearchBar';
import ListConversation from '../components/ListConversation';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {actions} from '../_redux/chatRedux';

const {Sider, Header} = Layout;

const Topic = () => (
  <div>
    <h3>TOPIC</h3>
  </div>
);

const NewsPage = props => {
  const dispatch = useDispatch();
  //let listConversation = useSelector(state => state.chat.listConversation);
  console.log('aaaaaaa');
  console.log(listConversation);

  let listConversation = [];

  useEffect(() => {
    dispatch(actions.ChatGetListConversationRequested());
    return () => {};
  }, [dispatch]);

  const [heightChatAside, setHeightChatAside] = useState(null);

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <Layout style={{height: 'calc(100vh - 180px)', backgroundColor: '#fff'}}>
      <Layout style={{width: 350}}>
        <div
          className="d-flex flex-column flex-grow-1 p-3"
          style={{
            display: 'flex',
          
            flexDirection: 'column',
            backgroundColor: '#fff',
            height: '100%',
            borderRight: '1px solid rgba(0, 0, 0, 0.05)',
          }}>
          <div className="input-group input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/General/Search.svg*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
            </div>
            <input type="text" className="form-control py-4 h-auto" placeholder="Email" />
          </div>
          {/*end:Search*/}
          {/*begin:Users*/}
          <div className="scroll-y bg-transparent">
            <InfiniteScroll initialLoad={false} pageStart={0} useWindow={false}>
              <ListConversation />
            </InfiniteScroll>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default NewsPage;
