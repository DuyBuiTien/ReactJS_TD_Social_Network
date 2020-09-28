/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Row} from 'antd';

function ImageUploadList({fileList, onDelete}) {
  console.log('fileListfileListfileListfileList');
  console.log(fileList);

  return (
    <div
      className="clearfix"
      style={{
        maxHeight: '130px',
        overflowY: 'auto',
      }}>
      <span className="ant-upload-picture-card-wrapper">
        {fileList.map((file, index) => {
          return (
            <div key={index} className="ant-upload-list ant-upload-list-picture-card">
              <div className="ant-upload-list-picture-card-container">
                <span>
                  <div
                    className={`ant-upload-list-item ${
                      file.status === 'error' ? 'ant-upload-list-item-error' : ''
                    } ant-upload-list-item-list-type-picture-card`}>
                    {file.status === 'uploading' ? (
                      <Row
                        type="flex"
                        align="middle"
                        justify="center"
                        style={{
                          height: '100%',
                        }}>
                        <span className="btn btn-clean btn-icon btn-md">
                          <i className="flaticon-upload icon-lg" />
                        </span>
                      </Row>
                    ) : (
                      <>
                        <div className="ant-upload-list-item-info">
                          <span className="ant-upload-list-item-actions"></span>
                          <img
                            className="ant-upload-list-item-thumbnail"
                            src={file.response ? file.response.thumbUrl : ''}
                            alt="image upload"
                          />
                        </div>
                        <span className="ant-upload-list-item-actions">
                          <span
                            className="btn btn-clean btn-icon btn-md"
                            onClick={() => onDelete(fileList.filter(item => item.uid !== file.uid))}>
                            <i className="flaticon-delete icon-lg" />
                          </span>
                        </span>
                      </>
                    )}
                  </div>
                </span>
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default ImageUploadList;
