import React from 'react';

const MessageItem = props => {
  return (
    <div className="d-flex flex-column mb-5 align-items-start">
      <div className="d-flex align-items-center">
        <div className="symbol symbol-circle symbol-40 mr-3">
          <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg" />
        </div>
        <div>
          <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">
            Matt Pears
          </a>
          <span className="text-muted font-size-sm">2 Hours</span>
        </div>
      </div>
      <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
        How likely are you to recommend our company to your friends and family?
      </div>
    </div>
  );
};

export default MessageItem;


{/* <div className="d-flex flex-column mb-5 align-items-end">
            <div className="d-flex align-items-center">
              <div>
                <span className="text-muted font-size-sm">3 minutes</span>
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">
                  You
                </a>
              </div>
              <div className="symbol symbol-circle symbol-40 ml-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" />
              </div>
            </div>
            <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
              Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
            </div>
          </div>
 */}
