/* eslint-disable no-restricted-imports */
import React, {useState, useEffect} from 'react';

import {Group} from '../component/Group'

export default function groupPageList() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Group />
        </div>
      </div>
    </>
  )
}