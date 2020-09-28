import React from 'react';
import MessageItem from './MessageItem';

const MessageList = props => {
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
    <>
      {data.map((item, index) => (
        <MessageItem key={`chatitem_${index}`} />
      ))}
    </>
  );
};

export default MessageList;
