import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import _ from 'lodash';

const PostInfo = props => {
  const {data} = props;

  const attachments = data?.attachments ?? [];

  let arr_image = _.filter(attachments, {type: 'image'}).map(i => `https://s1.cdn.becuame.com/medium/${i.url}`);

  return (
    <div
      className="View "
      style={{
        padding: '10px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: '1px',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        borderColor: 'rgb(224, 224, 224)',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
      }}>
      {/* <div className="symbol symbol-40 symbol-circle symbol-light-success mr-2">
        <div className="symbol-label" style={{backgroundImage: 'url("/media/users/300_21.jpg")'}} />
      </div> */}
      <div
        className="Image GroupAvatar"
        style={{width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'rgb(239, 239, 239)'}}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url("https://graph.facebook.com/3118759381516727/picture?width=2048&height=2048")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />
      </div>
      <div
        className="View QuickInputCommentItem-inputContainer"
        style={{
          marginLeft: '6px',
          borderColor: 'rgb(222, 222, 222)',
          borderWidth: '1px',
          backgroundColor: 'rgb(239, 239, 239)',
          borderRadius: '20px',
          flexGrow: 1,
          flexShrink: 1,
          display: 'flex',
          flexFlow: 'row nowrap',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <TextareaAutosize
          className="AutoSizeInput form-control border-0 m-1"
          placeholder="Viết bình luận..."
          autoCapitalize="sentences"
          style={{
            flexGrow: 1,
            flexShrink: 1,
            padding: '0px 10px',
            fontSize: '1em',

            resize: 'none',
            background: 'transparent',
            boxSizing: 'border-box',
          }}
          defaultValue={''}
          rows={1}
          maxRows={6}
        />
        <div className="TouchableOpacity  ">
          <div className="Image " style={{width: '26px', height: '26px', margin: '3px'}}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/static/images/icon_gallery_off.png")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            />
          </div>
        </div>
        <div className=" ">
          <div style={{cursor: 'pointer'}}>
            <div className="Image " style={{width: '26px', height: '26px', margin: '3px'}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/static/images/icon_heart_off@3x.png")',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              />
            </div>
          </div>
        </div>
        <div className=" ">
          <div style={{cursor: 'pointer'}}>
            <div className="Image " style={{width: '26px', height: '26px', margin: '3px'}}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/static/images/icon_smile_off@3x.png")',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              />
            </div>
          </div>
        </div>
        <div className="TouchableOpacity  disabled">
          <i
            style={{
              fontSize: '22px',
              color: 'lightgray',
              height: '40px',
              lineHeight: '40px',
              paddingLeft: '10px',
              paddingRight: '10px',
              fontFamily: 'Ionicons',
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}>
            
          </i>
        </div>
        <div
          className="Image "
          style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/static/images/icon_heart@3x.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          />
        </div>
        <div
          className="Image "
          style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/static/images/icon_heart_off@3x.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          />
        </div>
        <div
          className="Image "
          style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/static/images/icon_smile@3x.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          />
        </div>
        <div
          className="Image "
          style={{position: 'absolute', top: '-99999px', left: '-99999px', width: '0px', height: '0px', opacity: 0}}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/static/images/icon_smile_off@3x.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
