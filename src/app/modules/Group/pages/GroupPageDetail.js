/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from 'react';

import { GroupDetail } from '../component/GroupDetail'

export default function GroupPageDetail() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <GroupDetail />
        </div>
      </div>
    </>
  )
}