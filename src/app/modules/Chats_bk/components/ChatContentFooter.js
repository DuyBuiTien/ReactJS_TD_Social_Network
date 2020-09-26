import React, {useState, useRef} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import * as actions from '../_redux/chatActions';

import {isAuthenticated} from '../../../../utils/tokenHelpers';

import {Upload, Button, Input, Popover} from 'antd';

let typingTimer = null;

function delay(callback, ms) {
  window.clearTimeout(typingTimer);
  typingTimer = setTimeout(function() {
    callback();
  }, 1500);
}

const ChatContentFooter = props => {
  const inputMessageRef = useRef();
  const dispatch = useDispatch();
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [typing, setTyping] = useState(false);

  const {id} = useParams();
  const {user} = useSelector(state => state.auth);
  const currentUser = user;
  const {currentState} = useSelector(state => ({currentState: state.chats}), shallowEqual);

  let {conversation, inputMessage} = currentState;

  /*   if (!inputMessage) {
    inputMessage = {
      images: [],
      text: '',
      files: [],
    };
  } */

  const sendText = () => {
    if (inputMessage.text.trim() !== '') {
      // Gửi text và emoji
      dispatch(
        actions.sendMessage({
          message: inputMessage.text,
          receiver: conversation.receiver.id,
          conversationType: conversation.conversationType,
        }),
      );
      onInputMessageChange('');
    }
  };

  const onInputMessageChange = message => {
    dispatch(actions.INPUT_MESSAGE_CHANGE(message));
    if (message.trim() === '') {
      //handleTypingOff();
    }
  };

  const handleSendClick = () => {
    sendText();

    inputMessageRef.current.focus();
  };

  const onInputImageListChange = ({fileList}) => {
    /*  dispatch({
      type: constants.INPUT_IMAGE_LIST_CHANGE,
      payload: [...fileList],
    }); */
  };

  const onInputFileListChange = ({fileList}) => {
    /*  dispatch({
      type: constants.INPUT_FILE_LIST_CHANGE,
      payload: [...fileList],
    }); */
  };

  return (
    <div className="card-footer align-items-center" style={{padding: '0.5rem'}}>
      {/*begin::Compose*/}

      <div className="d-flex align-items-center justify-content-between ">
        <div className="mr-3">
          <Upload
            accept="image/*"
            name="photos"
            multiple={true}
            fileList={inputMessage?.images ?? []}
            headers={{
              Authorization: `Bearer ${isAuthenticated()}`,
            }}
            action={`${process.env.REACT_APP_API_URI}/message/photos`}
            showUploadList={false}
            onChange={files => {
              onInputImageListChange(files);
            }}>
            <span className="btn btn-clean btn-icon btn-md mr-1">
              <i className="flaticon2-photograph icon-lg" />
            </span>
          </Upload>
          <Upload
            accept="text/plain, application/pdf, .csv, .docx, .xlsx"
            name="files"
            multiple={true}
            fileList={inputMessage?.files ?? []}
            headers={{
              Authorization: `Bearer ${isAuthenticated()}`,
            }}
            action={`${process.env.REACT_APP_API_URI}/message/files`}
            showUploadList={false}
            onChange={files => {
              onInputFileListChange(files);
            }}>
            <span className="btn btn-clean btn-icon btn-md">
              <i className="flaticon-attachment icon-lg" />
            </span>
          </Upload>
        </div>
        <Input
          ref={inputMessageRef}
          placeholder="Nhập tin nhắn"
          //value={inputdemo}
          value={inputMessage?.text ?? ''}
          onChange={e => {
            //setInputdemo(e.target.value);
            onInputMessageChange(e.target.value);
          }}
          className="form-control  p-2 m-2"
          style={{flex: 1}}
          onPressEnter={handleSendClick}
          onKeyUp={() => {
            if (!typing) {
              setTyping(true);
              if (inputMessage && inputMessage.text.trim() !== '') {
              }
            }
            delay(() => {
              setTyping(false);
            }, 1000);
          }}
        />
        <div>
          <button type="button" className="btn btn-primary btn-md text-uppercase chat-send py-2 px-4" onClick={handleSendClick}>
            <i className="far fa-paper-plane"></i>
            {` Gửi`}
          </button>
        </div>
      </div>
      {/*begin::Compose*/}
    </div>
  );
};

export default ChatContentFooter;
