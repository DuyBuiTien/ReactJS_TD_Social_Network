import React, {useState, useRef} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {Upload, Button, Input, Popover} from 'antd';
import {Picker} from 'emoji-mart';

import * as actions from '../_redux/chatActions';
import {isAuthenticated} from '../../../../utils/tokenHelpers';
import FileUploadList from './FileUploadList';
import ImageUploadList from './ImageUploadList';

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

  console.log(inputMessage);

  const handleTypingOff = () => {
    /* emitTypingOff({
      info: currentUser,
      receiver: record.receiver,
      conversationType: record.conversationType,
    }); */
  };

  const onInputMessageChange = message => {
    dispatch(actions.INPUT_MESSAGE_CHANGE(message));
    if (message.trim() === '') {
      handleTypingOff();
    }
  };

  const onInputImageListChange = ({fileList}) => {
    console.log('onInputImageListChange ');
    console.log(fileList);

    dispatch(actions.INPUT_IMAGE_LIST_CHANGE([...fileList]));

    /*  dispatch({
      type: constants.INPUT_IMAGE_LIST_CHANGE,
      payload: [...fileList],
    }); */
  };

  const onInputFileListChange = ({fileList}) => {
    console.log('onInputFileListChange');
    console.log(fileList);

    dispatch(actions.INPUT_FILE_LIST_CHANGE([...fileList]));
    /*  dispatch({
      type: constants.INPUT_FILE_LIST_CHANGE,
      payload: [...fileList],
    }); */
  };

  const addEmoji = e => {
    onInputMessageChange(inputMessage.text + e.native);
    inputMessageRef.current.focus();
  };

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

  const sendImage = () => {
    // Nếu đang uploading thì không gửi
    let uploading = false;
    inputMessage.images.forEach(item => {
      if (item.status === 'uploading') uploading = true;
    });
    if (uploading) return;
    if (inputMessage.images.length > 0) {
      // gửi hình ảnh
      let images = [];
      inputMessage.images.forEach(item => {
        if (item.response.name) {
          images.push(item.response.name);
        }
      });

      console.log('GUI ANH');
      console.log({
        images,
        type: 'image',
        receiver: conversation.receiver.id,
        conversationType: conversation.conversationType,
      });

      /* dispatch(
        actions.sendMessage({
          images,
          type: 'image',
          receiver: conversation.receiver.id,
          conversationType: conversation.conversationType,
        }),
      ); */

      onInputImageListChange({fileList: []});
    }
  };

  const sendFile = () => {
    // Nếu đang uploading thì không gửi
    let uploading = false;

    console.log('FILE');
    console.log(inputMessage.files);

    inputMessage.files.forEach(item => {
      if (item.status === 'uploading') uploading = true;
    });
    if (uploading) return;
    if (inputMessage.files.length > 0) {
      // gửi file
      let files = [];
      inputMessage.files.forEach(item => {
        if (item.response.name) {
          files.push({
            id: item.response.id,
            name: item.name,
            path: item.response.name,
          });
        }
      });

      console.log('gui file');
      console.log({
        files,
        type: 'file',
        receiver: conversation.receiver.id,
        conversationType: conversation.conversationType,
      });

      dispatch(
        actions.sendMessage({
          files,
          type: 'file',
          receiver: conversation.receiver.id,
          conversationType: conversation.conversationType,
        }),
      );

      onInputFileListChange({fileList: []});
    }
  };

  const handleSendClick = () => {
    sendText();
    sendImage();
    sendFile();

    handleTypingOff();

    inputMessageRef.current.focus();
  };

  return (
    <div className="card-footer align-items-center" style={{padding: '0.5rem'}}>
      {/*begin::Compose*/}

      {inputMessage && inputMessage.images.length > 0 && (
        <ImageUploadList fileList={inputMessage.images} onDelete={fileList => onInputImageListChange({fileList})} />
      )}
      {inputMessage && inputMessage.files.length > 0 && (
        <FileUploadList onDelete={fileList => onInputFileListChange({fileList})} fileList={inputMessage.files} />
      )}

      <div className="d-flex align-items-center justify-content-between ">
        <div className="mr-3">
          <Upload
            accept="image/*"
            name="photos"
            multiple={false}
            fileList={inputMessage?.images ?? []}
            headers={{
              Authorization: `Bearer ${isAuthenticated()}`,
            }}
            action={`${process.env.REACT_APP_GLOBAL_URL}/v1/message/photos`}
            showUploadList={false}
            onChange={files => {
              console.log('ONCHANGE: ');
              console.log(files);

              if (files.file.status !== 'uploading') {
                console.log(files.file, files.fileList);
              }
              if (files.file.status === 'done') {
                console.log('THANH CONG');
                onInputImageListChange(files);
              } else if (files.file.status === 'error') {
                console.log('LOI');
              }
            }}>
            <span className="btn btn-clean btn-icon btn-md mr-1">
              <i className="flaticon2-photograph icon-lg" />
            </span>
          </Upload>
          <Upload
            accept="text/plain, application/pdf, .csv, .docx, .xlsx"
            name="files"
            multiple={false}
            fileList={inputMessage?.files ?? []}
            headers={{
              Authorization: `Bearer ${isAuthenticated()}`,
            }}
            action={`${process.env.REACT_APP_GLOBAL_URL}/v1/message/files`}
            showUploadList={false}
            onChange={files => {
              console.log('ONCHANGE: ');
              console.log(files);

              if (files.file.status !== 'uploading') {
                console.log(files.file, files.fileList);
              }
              if (files.file.status === 'done') {
                console.log('THANH CONG');
                onInputFileListChange(files);
              } else if (files.file.status === 'error') {
                console.log('LOI');
              }

              //    onInputFileListChange(files);
            }}>
            <span className="btn btn-clean btn-icon btn-md">
              <i className="flaticon-attachment icon-lg" />
            </span>
          </Upload>

          <Popover
            content={<Picker set="facebook" sheetSize={32} onSelect={addEmoji} />}
            trigger="click"
            visible={emojiVisible}
            onVisibleChange={() => setEmojiVisible(!emojiVisible)}>
            <span className="btn btn-clean btn-icon btn-md">
              <i className="far fa-smile"></i>
            </span>
          </Popover>
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
