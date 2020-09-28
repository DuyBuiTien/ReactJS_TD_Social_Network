import React from 'react';

function FileUploadList({fileList, onDelete}) {
  return (
    <div
      className="clearfix"
      style={{
        maxHeight: '130px',
        overflowY: 'auto',
      }}>
      <span className="ant-upload-list ant-upload-list-text">
        {fileList.map((file, index) => {
          return (
            <div className="d-flex flex-row justify-content-between align-items-center m-1" key={`file_iupload${index}`}>
              <span className="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1">{file.name}</span>
              <span className="ant-upload-list-item-card-actions">
                <span
                  className="btn btn-clean btn-icon btn-md"
                  onClick={() => onDelete(fileList.filter(item => item.uid !== file.uid))}>
                  <i className="flaticon-delete icon-lg" />
                </span>
              </span>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default FileUploadList;
