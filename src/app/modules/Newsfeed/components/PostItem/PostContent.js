import React from 'react';
import FbImageLibrary from '../../../../components/react-fb-image-grid';
import _ from 'lodash';
import {GLOBAL_URL} from '../../../../basic/basicApi'

const PostInfo = props => {
  const {data} = props;

  const attachments = data?.attachments ?? [];

  let arr_image = _.filter(attachments, {type: 'image'}).map(i => `${GLOBAL_URL}${i.path}`);
  return (
    <div className="pt-5">
      <p className="text-dark-75 font-size-lg font-weight-normal mb-2">{data.contentData}</p>
      <div className="bgi-no-repeat bgi-size-cover rounded ">
        <FbImageLibrary images={arr_image} />
      </div>
    </div>
  );
};

export default PostInfo;
