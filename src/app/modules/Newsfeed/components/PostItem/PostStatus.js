import React from 'react';
import {requestPOST, GLOBAL_URL, requestGET} from '../../../../basic/basicApi';
import {useSelector} from 'react-redux';

const PostStatus = props => {
  const {data} = props;
  const {user} = useSelector(state => state.auth);

  const handleLike = async () => {
    var newLike = {
      postId: data.id,
      type: 'like',
    };
    var res = await requestPOST(`${GLOBAL_URL}/v1/reaction/CreateReaction`, newLike);
    props.setLoad(true);
  };
  const handleUnLike = async () => {
    var unLike = {
      postId: data.id,
      commentId: null,
    };
    var res = await requestPOST(`${GLOBAL_URL}/v1/reaction/DeleteReaction`, unLike);
    props.setLoad(true);
  };

  return (
    <div className="d-flex align-items-center">
      {data.reactions.findIndex(i => i.userId === user.id && i.commentId == null) > -1 ? (
        <div className="btn btn-sm btn-text-danger btn-hover-icon-dark-25 btn-hover-text-dark-25 font-size-sm p-2 mr-auto">
          <span className="svg-icon svg-icon-md svg-icon-danger pr-1">
            <i
              className="flaticon-black text-danger"
              onClick={() => {
                handleUnLike();
              }}
            />
          </span>
          {`${data?.reactionCount ?? 0} lượt thích`}
        </div>
      ) : (
        <div className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger font-size-sm p-2 mr-auto">
          <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
            <i
              className="flaticon-black danger"
              onClick={() => {
                handleLike();
              }}
            />
          </span>
          {`${data?.reactionCount ?? 0} lượt thích`}
        </div>
      )}
      <div className="btn btn-text-primary btn-text-dark-50 btn-hover-icon-primary btn-hover-text-primary font-size-sm p-2 ">
        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
          <i className="flaticon-share" />
        </span>
        {`${data?.shareCount ?? 0} lượt chia sẻ`}
      </div>
      <div className="btn btn-text-primary btn-text-dark-50 btn-hover-icon-primary btn-hover-text-primary font-size-sm p-2 ">
        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
          <i className="flaticon-comment" />
        </span>
        {`${data.comments.length} bình luận`}
      </div>
    </div>
  );
};

export default PostStatus;
