import React from 'react';

const ItemConversation = props => {
  return (
    <div className="d-flex flex-grow-1 align-items-center justify-content-between mb-5">
      <div className="d-flex align-items-center">
        <div className="symbol symbol-circle symbol-50 mr-3">
          <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg" />
        </div>
        <div className="d-flex flex-column">
          <span className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Matt Pears</span>
          <span className="text-muted font-weight-bold font-size-sm">Head of Development</span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <span className="text-muted font-weight-bold font-size-sm">35 mins</span>
      </div>
    </div>
  );
};

export default ItemConversation;
