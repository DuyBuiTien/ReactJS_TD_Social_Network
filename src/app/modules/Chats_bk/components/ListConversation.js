import React from 'react';
import {List, Avatar} from 'antd';

import ItemConversation from './ItemConversation';
import {Link, useParams} from 'react-router-dom';

const ListConversation = props => {
  const {userId} = useParams();

  console.log('userId');
  console.log(userId);

  const data = [
    {
      title: 'Ant Design Title 1',
      id: 12,
    },
    {
      id: 123,
      title: 'Ant Design Title 2',
    },
    {
      id: 33,
      title: 'Ant Design Title 3',
    },
    {
      id: 134,
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <Link to={`/chat/${item.id}`}>
          <List.Item>
            <ItemConversation />
          </List.Item>
        </Link>
      )}
    />
  );
};

export default ListConversation;
